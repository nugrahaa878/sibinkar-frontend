import axiosClient from "@/networks/apiClient";
import useSWR from "swr";
import { Personnel } from "./types";

const useGetPersonnel = () => {
  const {
    data: listPersonnel,
    isLoading: loading,
    mutate,
  } = useSWR("/personil", async (): Promise<Personnel[]> => {
    const response = await axiosClient.get("/personil");
    return response.data.data;
  });

  return { loading, listPersonnel, mutate };
};

export default useGetPersonnel;
