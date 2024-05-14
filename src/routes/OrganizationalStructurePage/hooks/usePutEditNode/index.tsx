import axiosClient from "@/networks/apiClient";

interface Props {
  id: number;
  name: string;
  position: string;
  isOffset: boolean;
}

const usePutEditNode = async ({ id, name, position, isOffset }: Props) => {
  const data = {
    nama: name,
    jabatan: position,
    isOffset,
  };

  const response = await axiosClient.put(`/organization/node/${id}`, data);
  return response.data.success || true;
};

export default usePutEditNode;
