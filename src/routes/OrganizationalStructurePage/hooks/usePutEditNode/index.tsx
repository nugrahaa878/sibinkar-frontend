import axiosClient from "@/networks/apiClient";

interface Props {
  id: number;
  personnelId: string;
}

const usePutEditNode = async ({ id, personnelId }: Props) => {
  const data = {
    node_id: id,
    personnel_id: personnelId,
  };

  const response = await axiosClient.put(`/organizational-structure/nodes/${id}/`, data);
  return response.data.success;
};

export default usePutEditNode;
