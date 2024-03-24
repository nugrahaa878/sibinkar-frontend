import dummy_satker from "@/routes/StaffingStatusPage/data/dummy-satker";
import { MoreHorizontal } from "lucide-react";

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
          <tr>
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
              <MoreHorizontal />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
