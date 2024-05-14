import axiosClient from "@/networks/apiClient";

interface Props {
  id: string;
}

const useDeleteOrganization = async ({ id }: Props) => {
  const response = await axiosClient.delete(`/organization/${id}/`);
  return response.data.success || true;
};

export default useDeleteOrganization;
