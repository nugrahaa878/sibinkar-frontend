import useSWR from "swr";
import { Satker } from "../../types";
import axiosClient from "@/networks/apiClient";

const useGetStaffingStatus = () => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR("/staffing-status/", async (): Promise<ApiResponse<Satker[]>> => {
    const response = await axiosClient.get("/staffing-status/");

    return response.data;
  });

  return { data, loading, mutate };
};

export default useGetStaffingStatus;
