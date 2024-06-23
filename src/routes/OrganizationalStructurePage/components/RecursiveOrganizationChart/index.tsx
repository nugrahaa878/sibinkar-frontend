import { Tree, TreeNode } from "react-organizational-chart";
import Item from "../OrganizationChart/Item";
import { OrgNode } from "../../types";
import useGetOrganization from "../../hooks/useGetOrganization";
import { Loader2 } from "lucide-react";

interface RecursiveTreeNodeInterface {
  id: string;
  rootName?: string;
  item?: OrgNode;
}

const RecursiveTreeNode = ({
  id,
  item,
  rootName,
}: RecursiveTreeNodeInterface) => {
  if (!item) {
    return <h1>Tidak ada data</h1>;
  }

  if (item?.personnel.nama === rootName) {
    return item?.child.map((child) => (
      <RecursiveTreeNode
        id={id}
        key={child.id}
        item={child}
      />
    ));
  }

  return (
    <TreeNode label={<Item chartId={id} item={item} />}>
      {item?.child?.map((child) => (
        <RecursiveTreeNode
          id={id}
          key={child.id}
          item={child}
        />
      ))}
    </TreeNode>
  );
};

const RecursiveOrganizationChart = ({
  id,
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
            <Tree label={<Item chartId={id} item={organization.nodes} />}>
              <RecursiveTreeNode
                id={id}
                item={organization.nodes}
                rootName={organization.nodes.personnel.nama}
              />
            </Tree>
          )}
        </>
      )}
    </>
  );
};

export default RecursiveOrganizationChart;
