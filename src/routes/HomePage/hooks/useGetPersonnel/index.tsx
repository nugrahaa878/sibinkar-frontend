import axiosClient from "@/networks/apiClient";
import useSWR from "swr";
import { ListPersonnelResponseInterface } from "./types";

interface Props {
  page: number;
  limit: number;
  filterType?: string;
  filterValue?: string;
}

const useGetPersonnel = ({ page, limit, filterType, filterValue }: Props) => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/personil?page=${page}&limit=10&${filterType}=${filterValue}`,
    async (): Promise<ListPersonnelResponseInterface> => {
      const params = {
        page,
        limit,
      };
      if (filterValue) {
        params[`${filterType}`] = filterValue;
      }
      const response = await axiosClient.get(`/personil`, {
        params,
      });

      return response.data;
    }
  );

  const listPersonnel = data?.data?.result;
  const totalPages = data?.data?.meta.total_pages;

  return { loading, listPersonnel, mutate, totalPages };
};

export default useGetPersonnel;
