import useSWR from "swr";
import { Organization } from "../../types";
import axiosClient from "@/networks/apiClient";

interface Props {
  value: number;
}

const useGetOrganization = ({ value }: Props) => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/organizational-structure/chart/${value}/`,
    async (): Promise<ApiResponse<Organization>> => {
      const response = await axiosClient.get(
        `/organizational-structure/chart/${value}/`
      );

      return response.data;
    }
  );
  const organization = data?.data;

  return { organization, loading, mutate };
};

export default useGetOrganization;
