import axiosClient from "@/networks/apiClient";

interface Props {
  chartId: string;
  nodeId: number;
}

const useDeleteNode = async ({ chartId, nodeId }: Props) => {
  const data = {
    node_id: nodeId,
  };
  const response = await axiosClient.delete(
    `/organizational-structure/nodes/${chartId}/`,
    { data }
  );
  return response.data.success;
};

export default useDeleteNode;
