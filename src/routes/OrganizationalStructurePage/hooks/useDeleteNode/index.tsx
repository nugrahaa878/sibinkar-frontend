import axiosClient from "@/networks/apiClient";

interface Props {
  id: number;
}

const useDeleteNode = async ({ id }: Props) => {
  const response = await axiosClient.delete(`/organization/node/${id}/`);
  return response.data.success || true;
};

export default useDeleteNode;
