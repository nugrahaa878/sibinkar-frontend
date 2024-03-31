interface Props {
  item: number;
  index: number;
  dsp: number;
}

const TableItem = ({ item, index, dsp }: Props) => {
  const isRiil = index % 2 !== 0;
  const isOver = item > dsp && isRiil;
  const isUnder = item < dsp && isRiil;
  const isJumlah = index === 16 || index === 17 || index >= 24;
  const isHighlighted = (): boolean => {
    if (index % 2 === 0 && index % 4 !== 0) {
      return false;
    }
    if ((index - 1) % 2 === 0 && (index - 1) % 4 !== 0) {
      return false;
    }
    return true;
  };
  const bgColor = (): string => {
    if (index === 16 || index === 17 || index >= 24) {
      return "bg-indigo-50";
    }
    if (isOver) {
      return "bg-red-200";
    }
    if (isUnder) {
      return "bg-blue-200";
    }
    if (isHighlighted()) {
      return "bg-neutral-200";
    }
    return "bg-neutral-50";
  };
  return (
    <td
      data-tooltip-id={isOver ? "over-tooltip" : isUnder ? "under-tooltip" : ""}
      className={`${bgColor()} ${isJumlah && "font-bold"} text-center py-2`}
    >
      {item}
    </td>
  );
};

export default TableItem;
