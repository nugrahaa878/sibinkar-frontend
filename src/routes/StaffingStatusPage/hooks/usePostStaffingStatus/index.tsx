import axiosClient from "@/networks/apiClient";

interface Props {
  satker: string;
  irjenPol: number;
  brigjenPol: number;
  kombesPol: number;
  akbp: number;
  komPol: number;
  akp: number;
  ip: number;
  brikTa: number;
  iv: number;
  iii: number;
  ii: number;
}

const usePostStaffingStatus = async ({
  satker,
  irjenPol,
  brigjenPol,
  kombesPol,
  akbp,
  komPol,
  akp,
  ip,
  brikTa,
  iv,
  iii,
  ii,
}: Props) => {
  const data = {
    satker: satker,
    data: [
      {
        pangkat: "IRJEN",
        dsp: irjenPol,
      },
      {
        pangkat: "BRIGJEN",
        dsp: brigjenPol,
      },
      {
        pangkat: "KOMBES",
        dsp: kombesPol,
      },
      {
        pangkat: "AKBP",
        dsp: akbp,
      },
      {
        pangkat: "KOMPOL",
        dsp: komPol,
      },
      {
        pangkat: "AKP",
        dsp: akp,
      },
      {
        pangkat: "IP",
        dsp: ip,
      },
      {
        pangkat: "BRIG/TA",
        dsp: brikTa,
      },
      {
        pangkat: "IV",
        dsp: iv,
      },
      {
        pangkat: "III",
        dsp: iii,
      },
      {
        pangkat: "II/I",
        dsp: ii,
      },
    ],
  };
  const response = await axiosClient.post("/staffing-status/", data);
  return response.data.success;
};

export default usePostStaffingStatus;
