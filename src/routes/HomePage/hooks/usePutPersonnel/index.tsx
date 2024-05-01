import { PersonnelDataInterface } from "../types";
import axiosClient from "@/networks/apiClient";

const usePutPersonnel = async ({
  id,
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
  const personnelData = {
    nama,
    jenis_kelamin: jenis_kelamin
      ?.replace("Laki-laki", "L")
      .replace("Perempuan", "P"),
    nrp,
    status,
    jabatan,
    pangkat,
    subsatker,
    subdit,
    bko,
  };
  const response = await axiosClient.put(`/personil/${id}/`, personnelData);
  return response.data.success;
};

export default usePutPersonnel;
