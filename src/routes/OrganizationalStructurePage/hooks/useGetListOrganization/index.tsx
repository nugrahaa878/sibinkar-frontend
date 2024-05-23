import useSWR from "swr";
import { Organization } from "../../types";
import axiosClient from "@/networks/apiClient";

const useGetListOrganization = () => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/organizational-structure/chart/`,
    async (): Promise<ApiResponse<Organization[]>> => {
      const response = await axiosClient.get(
        `/organizational-structure/chart/`
      );

      return response.data;
    }
  );
  const listOrganization = data?.data;

  return { listOrganization, loading, mutate };
};

export default useGetListOrganization;
