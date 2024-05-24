import useSWR from "swr";
import axiosClient from "@/networks/apiClient";

const useGetTotalStaffingStatus = () => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR("/staffing-status/total/", async (): Promise<ApiResponse<any>> => {
    const response = await axiosClient.get("/staffing-status/total/");

    return response.data;
  });

  const result = data;
  return { result, loading, mutate };
};

export default useGetTotalStaffingStatus;