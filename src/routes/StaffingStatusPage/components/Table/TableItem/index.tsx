import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SatkerData } from "@/routes/StaffingStatusPage/types";
import InfoDialog from "../../Dialog/InfoDialog";

interface Props {
  isSum: boolean;
  index: number;
  data: SatkerData | undefined;
}

const TableItem = ({ isSum = false, index, data }: Props) => {
  const rill: number = data?.rill || 0;
  const dsp: number = data?.dsp || 0;
  const message: string = data?.message || "";
  const isOver = rill > dsp;
  const isUnder = rill < dsp;
  const isHighlighted = index % 2 !== 0;
  const bgColor = (): string => {
    if (isSum) {
      return "bg-indigo-50";
    }
    if (isOver || isUnder) {
      return "bg-red-100";
    }
    if (isHighlighted) {
      return "bg-neutral-100";
    }
    return "bg-neutral-50";
  };
  return (
    <Dialog>
      <td
        data-tooltip-id={
          isOver ? "over-tooltip" : isUnder ? "under-tooltip" : ""
        }
        className={`flex-row ${bgColor()} py-2`}
      >
        <DialogTrigger asChild>
          <h1
            className={`${
              (isOver || isUnder) &&
              "text-red-500 font-bold hover:cursor-pointer"
            } ${isSum && "font-bold"} text-center`}
          >
            {dsp}
          </h1>
        </DialogTrigger>
      </td>

      <td
        className={`flex-row ${
          index % 2 === 0 ? "bg-neutral-50" : "bg-neutral-100"
        } ${isSum && "bg-indigo-50"} py-2`}
      >
        <h1 className={`${isSum && "font-bold"} text-center`}>{rill}</h1>
      </td>
      {message && (
        <InfoDialog
          title={dsp > rill ? "Kekurangan Personil" : "Kelebihan Personil"}
          message={message}
        />
      )}
    </Dialog>
  );
};

export default TableItem;
