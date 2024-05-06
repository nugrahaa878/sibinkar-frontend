import { Satker } from "../../hooks/useGetStaffingStatus/types";
import { Tooltip as ReactTooltip } from "react-tooltip";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";

interface Props {
  data: Satker[];
}

const Table = ({ data }: Props) => {
  return (
    <div className="w-full py-11">
      <table className="w-full border-2 rounded-lg">
        <TableHead />
        <TableBody data={data} />
        <TableFooter />
      </table>
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
    </div>
  );
};

export default Table;
