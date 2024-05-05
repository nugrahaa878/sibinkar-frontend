import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MoreHorizontal } from "lucide-react";
import EditDialog from "../../Dialog/EditDialog";
import TableItem from "../TableItem";
import { Satker } from "@/routes/StaffingStatusPage/hooks/useGetStaffingStatus/types";
import {
  PnsPolriSatkerEnum,
  PolriSatkerEnum,
} from "@/routes/StaffingStatusPage/entities/satker-enum";
import { useState } from "react";
import InfoDialog from "../../Dialog/InfoDialog";

interface Props {
  data: Satker[];
}

const TableBody = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"edit" | "info" | "">();
  const [dialogMessage, setDialogMessage] = useState<string>();
  const [dialogTitle, setDialogTitle] = useState<string>();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setDialogType("");
      setDialogMessage("");
      setDialogTitle("");
    }
    setIsOpen(open);
  };

  const handleEditDialogOpen = () => {
    setDialogType("edit");
    setIsOpen(true);
  };

  const handleInfoDialogOpen = (title: string, message: string) => {
    setDialogType("info");
    setIsOpen(true);
    setDialogMessage(message);
    setDialogTitle(title);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <tr key={item.satker}>
              <td className="text-center bg-neutral-50">{index + 1}</td>
              <td className="bg-neutral-50">{item.satker}</td>

              {Object.values(PolriSatkerEnum).map((value, index) => {
                const satkerData = item.POLRI[value];
                let dsp = 0;
                let rill = 0;
                if (satkerData) {
                  dsp = satkerData.dsp;
                  rill = satkerData.rill;
                }

                return (
                  <TableItem
                    dsp={dsp}
                    rill={rill}
                    index={index}
                    isSum={false}
                    onClick={() => {
                      handleInfoDialogOpen(
                        dsp > rill
                          ? "Kelebihan Personil"
                          : "Kekurangan Personil",
                        satkerData?.message || ""
                      );
                    }}
                  />
                );
              })}

              <TableItem
                dsp={item.POLRI.jumlah.dsp}
                rill={item.POLRI.jumlah.rill}
                index={8}
                isSum={true}
              />

              {Object.values(PnsPolriSatkerEnum).map((value, index) => {
                const satkerData = item["PNS POLRI"][value];
                let dsp = 0;
                let rill = 0;
                if (satkerData) {
                  dsp = satkerData.dsp;
                  rill = satkerData.rill;
                }

                return (
                  <TableItem
                    dsp={dsp}
                    rill={rill}
                    index={index}
                    isSum={false}
                    onClick={() => {
                      handleInfoDialogOpen(
                        dsp > rill
                          ? "Kelebihan Personil"
                          : "Kekurangan Personil",
                        satkerData?.message || ""
                      );
                    }}
                  />
                );
              })}

              <TableItem
                dsp={item["PNS POLRI"].jumlah.dsp}
                rill={item["PNS POLRI"].jumlah.rill}
                index={12}
                isSum={true}
              />

              <TableItem
                dsp={item.keterangan.dsp}
                rill={item.keterangan.rill}
                index={13}
                isSum={false}
              />

              <td className="px-2 bg-neutral-50">
                <DialogTrigger onClick={handleEditDialogOpen} asChild>
                  <MoreHorizontal className="pl-2" />
                </DialogTrigger>
              </td>

              {dialogType === "info" && (
                <InfoDialog
                  title={dialogTitle || ""}
                  message={dialogMessage || ""}
                />
              )}

              {/* <EditDialog title={item.title} count={item.count} /> */}
            </tr>
          </Dialog>
        );
      })}

      <ReactTooltip
        id="over-tooltip"
        place="bottom-start"
        variant="error"
        content="Kelebihan Personil"
      />
      <ReactTooltip
        id="under-tooltip"
        place="bottom"
        variant="error"
        content="Kekurangan Personil"
      />
    </>
  );
};

export default TableBody;
