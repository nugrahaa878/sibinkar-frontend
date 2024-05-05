interface Props {
  isSum: boolean;
  dsp: number;
  rill: number;
  index: number;
  onClick?: () => void;
}

const TableItem = ({ isSum = false, dsp, rill, index, onClick }: Props) => {
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
    <>
      <td
        data-tooltip-id={
          isOver ? "over-tooltip" : isUnder ? "under-tooltip" : ""
        }
        className={`flex-row ${bgColor()} py-2`}
        onClick={() => {
          if (dsp !== rill) {
            onClick?.();
          }
        }}
      >
        <h1
          className={`${(isOver || isUnder) && "text-red-500 font-bold"} ${
            isSum && "font-bold"
          } text-center`}
        >
          {dsp}
        </h1>
      </td>
      <td
        className={`flex-row ${
          index % 2 === 0 ? "bg-neutral-50" : "bg-neutral-100"
        } ${isSum && "bg-indigo-50"} py-2`}
      >
        <h1 className={`${isSum && "font-bold"} text-center`}>{rill}</h1>
      </td>
    </>
  );
};

export default TableItem;
