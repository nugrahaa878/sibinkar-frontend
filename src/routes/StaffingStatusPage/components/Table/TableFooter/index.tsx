const TableFooter = () => {
  const sum = [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1,
  ];

  return (
    <tr>
      <td className="py-4 px-6 bg-[#7E93C9] text-white font-bold" colSpan={2}>
        Jumlah
      </td>
      {sum.map((count, idx) => {
        return (
          <td
            className="text-center bg-[#7E93C9] text-white font-bold"
            key={`item-${idx}`}
          >
            {count}
          </td>
        );
      })}
      <td className="bg-[#7E93C9]" />
    </tr>
  );
};

export default TableFooter;
