import { Tree, TreeNode } from "react-organizational-chart";
import Item from "../OrganizationChart/Item";
import { OrgNode } from "../../types";
import useGetOrganization from "../../hooks/useGetOrganization";
import { Loader2 } from "lucide-react";

interface RecursiveTreeNodeInterface {
  id?: string;
  rootName?: string;
  item?: OrgNode;
  onCreateNode: (
    parentId: number,
    name: string,
    position: string,
    offset: boolean
  ) => Promise<void>;
}

const RecursiveTreeNode = ({
  item,
  rootName,
  onCreateNode,
}: RecursiveTreeNodeInterface) => {
  if (!item) {
    return <h1>Tidak ada data</h1>
  }

  if (item?.nama === rootName) {
    return item?.child.map((child) => (
      <RecursiveTreeNode
        key={child.id}
        item={child}
        onCreateNode={onCreateNode}
      />
    ));
  }

  return (
    <TreeNode
      label={
        <Item
          id={item.id}
          name={item.nama}
          position={item.jabatan}
          offset={item.offset}
          childOffset={item.child_offsets}
          onCreateNode={onCreateNode}
        />
      }
    >
      {item?.child?.map((child) => (
        <RecursiveTreeNode
          key={child.id}
          item={child}
          onCreateNode={onCreateNode}
        />
      ))}
    </TreeNode>
  );
};

const RecursiveOrganizationChart = ({
  id,
  onCreateNode,
}: RecursiveTreeNodeInterface) => {
  const { organization, loading } = useGetOrganization({
    value: Number(id),
  });

  return (
    <>
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          {!organization?.nodes && <h1>Tidak ada data</h1>}
          {organization?.nodes && (
            <Tree
              label={
                <Item
                  id={organization.nodes.id}
                  name={organization.nodes.nama}
                  position={organization.nodes.jabatan}
                  offset={organization.nodes.offset}
                  childOffset={organization.nodes.child_offsets}
                  onCreateNode={onCreateNode}
                />
              }
            >
              <RecursiveTreeNode
                item={organization.nodes}
                rootName={organization.nodes.nama}
                onCreateNode={onCreateNode}
              />
            </Tree>
          )}
        </>
      )}
    </>
  );
};

export default RecursiveOrganizationChart;
