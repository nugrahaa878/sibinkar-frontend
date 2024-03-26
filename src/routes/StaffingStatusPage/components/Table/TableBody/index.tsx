import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import dummy_satker from "@/routes/StaffingStatusPage/data/dummy-satker";
import { MoreHorizontal } from "lucide-react";
import EditDialog from "../../Dialog/EditDialog";

const TableBody = () => {
  const isHighlighted = (index: number): boolean => {
    if (index % 2 === 0 && index !== 0 && index % 4 !== 0) {
      return true;
    }
    if ((index - 1) % 2 === 0 && index - 1 !== 0 && (index - 1) % 4 !== 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      {dummy_satker.map((item, index) => {
        return (
          <Dialog>
            <tr key={item.title}>
              <td className="text-center bg-neutral-50">{index + 1}</td>
              <td className="bg-neutral-50">{item.title}</td>
              {item.count.map((count, indexItem) => {
                return (
                  <td
                    className={`${
                      isHighlighted(indexItem)
                        ? "bg-neutral-200"
                        : "bg-neutral-50"
                    }  text-center py-2`}
                  >
                    {count}
                  </td>
                );
              })}
              <td className="px-2">
                <DialogTrigger asChild>
                  <MoreHorizontal />
                </DialogTrigger>
              </td>
              <EditDialog title={item.title} count={item.count} />
            </tr>
          </Dialog>
        );
      })}
    </>
  );
};

export default TableBody;
