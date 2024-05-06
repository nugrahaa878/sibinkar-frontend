import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";
import EditDialog from "../../Dialog/EditDialog";
import TableItem from "../TableItem";
import { Satker } from "@/routes/StaffingStatusPage/hooks/useGetStaffingStatus/types";
import {
  PnsPolriSatkerEnum,
  PolriSatkerEnum,
} from "@/routes/StaffingStatusPage/entities/satker-enum";

interface Props {
  data: Satker[];
}

const TableBody = ({ data }: Props) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <tr key={item.satker}>
            <td className="text-center bg-neutral-50">{index + 1}</td>
            <td className="bg-neutral-50">{item.satker}</td>

            {Object.values(PolriSatkerEnum).map((value, index) => {
              const satkerData = item.POLRI[value];

              return (
                <TableItem data={satkerData} index={index} isSum={false} />
              );
            })}

            <TableItem data={item.POLRI.jumlah} index={8} isSum={true} />

            {Object.values(PnsPolriSatkerEnum).map((value, index) => {
              const satkerData = item["PNS POLRI"][value];

              return (
                <TableItem data={satkerData} index={index} isSum={false} />
              );
            })}

            <TableItem
              data={item["PNS POLRI"].jumlah}
              index={12}
              isSum={true}
            />

            <TableItem data={item.keterangan} index={13} isSum={false} />

            <td className="px-2 bg-neutral-50">
              <Dialog>
                <DialogTrigger asChild>
                  <MoreHorizontal className="pl-2 hover:cursor-pointer" />
                </DialogTrigger>

                <EditDialog title={item.satker} data={item} />
              </Dialog>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
