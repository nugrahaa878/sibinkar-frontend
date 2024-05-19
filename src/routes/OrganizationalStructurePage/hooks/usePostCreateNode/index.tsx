import axiosClient from "@/networks/apiClient";
import { OrgNode } from "../../types";

interface Props {
  organizationId: string;
  parentId: number;
  name: string;
  position: string;
  offset: boolean;
  item: OrgNode;
  parentOffsetId?: number;
}

const usePostCreateNode = async ({
  organizationId,
  parentId,
  name,
  position,
  offset,
  item,
  parentOffsetId,
}: Props) => {
  let id = parentId
  // Check if item has child
  item.child.forEach((node) => {
    if(node.offset) {
      id = node.id;
      return;
    }
  })

  // force to parent if is offset child
  if (parentOffsetId) {
    id = parentOffsetId
  }

  const data = {
    parent_id: id,
    nama: name,
    jabatan: position,
    offset: offset,
  };
  const response = await axiosClient.post(
    `/organizational-structure/${parentOffsetId ? "offset-" : ""}child-nodes/${organizationId}/`,
    data
  );
  return response.data.success;
};

export default usePostCreateNode;
