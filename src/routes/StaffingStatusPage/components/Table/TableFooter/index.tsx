import useGetTotalStaffingStatus from "@/routes/StaffingStatusPage/hooks/useGetTotalStaffingStatus";
import {
  PnsPolriSatkerEnum,
  PolriSatkerEnum,
} from "@/routes/StaffingStatusPage/types/satkerEnum";

const TableFooter = () => {
  const { result } = useGetTotalStaffingStatus();

  return (
    <tr>
      <td className="py-4 px-6 bg-[#7E93C9] text-white font-bold" colSpan={2}>
        Jumlah
      </td>
      {Object.values(PolriSatkerEnum).map((value, index) => {
        const satkerData = result?.data[value];
        const dsp = satkerData?.dsp ?? 0;
        const rill = satkerData?.rill ?? 0;

        return (
          <>
            <td
              className="text-center bg-[#7E93C9] text-white font-bold"
              key={`item-${index}-${value}`}
            >
              {dsp}
            </td>
            <td
              className="text-center bg-[#7E93C9] text-white font-bold"
              key={`item-${index + 1}-${value}`}
            >
              {rill}
            </td>
          </>
        );
      })}
      <td className="text-center bg-[#7E93C9] text-white font-bold">
        {result?.data["POLRI"]?.dsp ?? 0}
      </td>
      <td className="text-center bg-[#7E93C9] text-white font-bold">
        {result?.data["POLRI"]?.rill ?? 0}
      </td>
      {Object.values(PnsPolriSatkerEnum).map((value, index) => {
        const satkerData = result?.data[value];
        const dsp = satkerData?.dsp ?? 0;
        const rill = satkerData?.rill ?? 0;

        return (
          <>
            <td
              className="text-center bg-[#7E93C9] text-white font-bold"
              key={`item-${index}-${value}`}
            >
              {dsp}
            </td>
            <td
              className="text-center bg-[#7E93C9] text-white font-bold"
              key={`item-${index + 1}-${value}`}
            >
              {rill}
            </td>
          </>
        );
      })}
      <td className="text-center bg-[#7E93C9] text-white font-bold">
        {result?.data["PNS POLRI"]?.dsp ?? 0}
      </td>
      <td className="text-center bg-[#7E93C9] text-white font-bold">
        {result?.data["PNS POLRI"]?.rill ?? 0}
      </td>
      <td
        className="text-center bg-[#7E93C9] text-white font-bold"
      >
        {result?.data["Keterangan"]?.dsp ?? 0}
      </td>
      <td
        className="text-center bg-[#7E93C9] text-white font-bold"
      >
        {result?.data["Keterangan"]?.rill ?? 0}
      </td>
      <td className="bg-[#7E93C9]" />
    </tr>
  );
};

export default TableFooter;
