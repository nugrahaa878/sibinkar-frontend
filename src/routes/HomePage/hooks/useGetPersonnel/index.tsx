import axiosClient from "@/networks/apiClient";
import useSWR from "swr";
import { ListPersonnelResponseInterface } from "./types";

interface Props {
  page: number;
  limit: number;
  pangkat?: number;
  jabatan?: number;
}

const useGetPersonnel = ({ page, limit, pangkat, jabatan }: Props) => {
  const {
    data,
    isLoading: loading,
    mutate,
  } = useSWR(
    `/personil?page=${page}`,
    async (): Promise<ListPersonnelResponseInterface> => {
      const response = await axiosClient.get("/personil", {
        params: {
          page,
          limit,
          pangkat,
          jabatan,
        },
      });

      console.log("999 ini response data", response.data);
      return response.data;
    }
  );

  const listPersonnel = data?.data?.result;
  const totalPages = data?.data?.meta.total_pages;

  return { loading, listPersonnel, mutate, totalPages };
};

export default useGetPersonnel;
