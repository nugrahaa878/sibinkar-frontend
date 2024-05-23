import axiosClient from "@/networks/apiClient";

const useGetExportPersonnelData = async () => {
  const response = await axiosClient.get("/personil/export/");
  return response.data;
};

export default useGetExportPersonnelData;