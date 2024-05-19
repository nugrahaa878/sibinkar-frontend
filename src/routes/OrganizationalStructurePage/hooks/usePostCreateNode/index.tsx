import axiosClient from "@/networks/apiClient";

interface Props {
  organizationId: string;
  parentId: number;
  name: string;
  position: string;
  offset: boolean;
}

const usePostCreateNode = async ({
  organizationId,
  parentId,
  name,
  position,
  offset,
}: Props) => {
  const data = {
    parent_id: parentId,
    nama: name,
    jabatan: position,
    offset: offset,
  };
  const response = await axiosClient.post(
    `/organizational-structure/child-nodes/${organizationId}/`,
    data
  );
  return response.data.success;
};

export default usePostCreateNode;
