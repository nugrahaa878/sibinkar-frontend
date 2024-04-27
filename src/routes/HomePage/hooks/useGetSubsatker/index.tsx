import axiosClient from "@/networks/apiClient";

const useGetSubsatker = async () => {
  const response = await axiosClient.get("personil/subsatker");
  return response.data.data;
};

export default useGetSubsatker;
