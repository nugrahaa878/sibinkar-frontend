import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip as ReactTooltip } from "react-tooltip";
import dummy_satker from "@/routes/StaffingStatusPage/data/dummy-satker";
import { MoreHorizontal } from "lucide-react";
import EditDialog from "../../Dialog/EditDialog";
import TableItem from "../TableItem";

const TableBody = () => {
  return (
    <>
      {dummy_satker.map((item, index) => {
        return (
          <Dialog>
            <tr key={item.title}>
              <td className="text-center bg-neutral-50">{index + 1}</td>

              <td className="bg-neutral-50">{item.title}</td>

              {item.count.map((count, indexItem) => {
                const dsp = item.count[indexItem - 1];

                return <TableItem item={count} dsp={dsp} index={indexItem} />;
              })}

              <td className="px-2 bg-neutral-50">
                <DialogTrigger asChild>
                  <MoreHorizontal className="pl-2" />
                </DialogTrigger>
              </td>

              <EditDialog title={item.title} count={item.count} />
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
        variant="info"
        content="Kekurangan Personil"
      />
    </>
  );
};

export default TableBody;
