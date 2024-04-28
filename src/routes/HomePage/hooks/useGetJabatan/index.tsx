import axiosClient from "@/networks/apiClient";
import useSWR from "swr";
import { Jabatan } from "./types";

interface Props {
  shouldFetch: boolean;
}

const useGetJabatan = ({ shouldFetch }: Props) => {
  const { mutate, data, isLoading } = useSWR(
    shouldFetch ? "/personil/jabatan" : null,
    async (): Promise<Jabatan[]> => {
      const response = await axiosClient.get("/personil/jabatan");
      return response.data;
    }
  );

  return { mutate, data, isLoading };
};

export default useGetJabatan;
