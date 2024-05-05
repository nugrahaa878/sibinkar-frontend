import { Satker } from "../../hooks/useGetStaffingStatus/types";
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
    </div>
  );
};

export default Table;
