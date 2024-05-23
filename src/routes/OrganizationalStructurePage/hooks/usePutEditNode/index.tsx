import axiosClient from "@/networks/apiClient";

interface Props {
  id: number;
  name: string;
  position: string;
}

const usePutEditNode = async ({ id, name, position }: Props) => {
  const data = {
    node_id: id,
    nama: name,
    jabatan: position,
  };

  const response = await axiosClient.put(`/organizational-structure/nodes/${id}/`, data);
  return response.data.success;
};

export default usePutEditNode;
