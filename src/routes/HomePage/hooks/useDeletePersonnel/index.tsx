import axiosClient from "@/networks/apiClient";

interface Props {
  id: string;
}

const useDeletePersonnel = async ({ id }: Props) => {
  const response = await axiosClient.delete(`/personil/${id}/`);
  return response.data.success;
};

export default useDeletePersonnel;
