import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";

const Table = () => {
  return (
    <div className="w-full py-11">
      <table className="w-full border-2 rounded-lg">
        <TableHead />
        <TableBody />
        <TableFooter />
      </table>
    </div>
  );
};

export default Table;
