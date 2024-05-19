import axiosClient from "@/networks/apiClient";

interface Props {
  id: string;
}

const useDeleteOrganization = async ({ id }: Props) => {
  const response = await axiosClient.delete(`/organizational-structure/chart/${id}/`);
  return response.data.success;
};

export default useDeleteOrganization;
