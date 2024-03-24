import dummy_satker from "../../data/dummy-satker";

const Table = () => {
  const dspCount = [...Array(14).keys()];
  const sum = [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1,
  ];
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
    <div className="w-full py-11">
      <table className="w-full border-2">
        <tr className="bg-[#7E93C9] text-white">
          <th rowSpan={3}>No</th>
          <th rowSpan={3}>Satker</th>
          <th colSpan={18}>Polri</th>
          <th colSpan={6}>PNS Polri</th>
          <th rowSpan={2} colSpan={2}>
            Jumlah
          </th>
          <th rowSpan={2} colSpan={2}>
            Ket
          </th>
        </tr>
        <tr className="bg-[#7E93C9] text-white">
          <th colSpan={2}>IRJEN</th>
          <th colSpan={2}>BRIGJEN</th>
          <th colSpan={2}>KOMBES</th>
          <th colSpan={2}>AKBP</th>
          <th colSpan={2}>KOMPOL</th>
          <th colSpan={2}>AKP</th>
          <th colSpan={2}>IP</th>
          <th colSpan={2}>BRIG/TA</th>
          <th colSpan={2}>Jumlah</th>
          <th colSpan={2}>IV</th>
          <th colSpan={2}>III</th>
          <th colSpan={2}>II/I</th>
        </tr>
        <tr className="bg-[#9AABD5] text-white">
          {dspCount.map((_) => {
            return (
              <>
                <th>DSP</th>
                <th>RIIL</th>
              </>
            );
          })}
        </tr>
        {dummy_satker.map((item, index) => {
          return (
            <tr>
              <td className="text-center">{index + 1}</td>
              <td>{item.title}</td>
              {item.count.map((count, indexItem) => {
                return (
                  <td
                    className={`${
                      isHighlighted(indexItem) && "bg-neutral-200"
                    }  text-center`}
                  >
                    {count}
                  </td>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <td
            className="py-4 px-6 bg-[#7E93C9] text-white font-bold"
            colSpan={2}
          >
            Jumlah
          </td>
          {sum.map((count) => {
            return (
              <td className="text-center bg-[#7E93C9] text-white font-bold">
                {count}
              </td>
            );
          })}
        </tr>
      </table>
    </div>
  );
};

export default Table;
