import useSWR from "swr";
import { PersonnelDataInterface } from "../types";
import axiosClient from "@/networks/apiClient";
import { PersonnelResponseInterface } from "./types";

const usePostPersonnel = ({
  nama,
  jenis_kelamin,
  nrp,
  status,
  jabatan,
  pangkat,
  subsatker,
  subdit,
  bko,
}: PersonnelDataInterface) => {
  const {
    data: personnel,
    isLoading: loading,
    mutate,
  } = useSWR(`/personil/`, async (): Promise<PersonnelResponseInterface> => {
    const personnelData = {
      nama,
      jenis_kelamin,
      nrp,
      status,
      jabatan,
      pangkat,
      subsatker,
      subdit,
      bko,
    };
    const response = await axiosClient.post("/personil/", personnelData);
    return response.data;
  });

  return { loading, personnel, mutate };
};

export default usePostPersonnel;
