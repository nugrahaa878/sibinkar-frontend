import axiosClient from "@/networks/apiClient";

const useGetSubdit = async () => {
  const response = await axiosClient.get("personil/subdit");
  return response.data.data;
};

export default useGetSubdit;
