import axiosClient from "@/networks/apiClient";
import useSWR from "swr";
import { dummyData } from "../../components/RecursiveOrganizationChart/dummyData";

interface Props {
  id: string;
}

const useGetOrganization = async ({ id }: Props) => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR(`/organization/${id}/`, async (): Promise<ApiResponse<any>> => {
    const response = await axiosClient.get(`/organization/${id}/`);

    return response.data;
  });

  const result = data?.data?.result || dummyData;

  return { loading, result, mutate };
};

export default useGetOrganization;
