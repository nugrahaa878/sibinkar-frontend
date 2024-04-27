import axiosClient from "@/networks/apiClient";

const useGetPangkat = async () => {
  const response = await axiosClient.get("personil/pangkat");
  return response.data.data;
};

export default useGetPangkat;
