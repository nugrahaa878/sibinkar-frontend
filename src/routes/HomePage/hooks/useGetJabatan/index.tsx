import axiosClient from "@/networks/apiClient";

const useGetJabatan = async () => {
  const response = await axiosClient.get("personil/jabatan");
  return response.data.data;
};

export default useGetJabatan;
