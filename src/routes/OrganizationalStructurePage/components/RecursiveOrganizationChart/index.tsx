import { Tree, TreeNode } from "react-organizational-chart";
import Item from "../OrganizationChart/Item";
import { OrgNode } from "../../types";

interface RecursiveTreeNodeInterface {
  item: OrgNode;
  rootName?: string;
}

const RecursiveTreeNode = ({ item, rootName }: RecursiveTreeNodeInterface) => {
  if (item.nama === rootName) {
    return item.child.map((child) => (
      <RecursiveTreeNode key={child.id} item={child} />
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
        />
      }
    >
      {item.child?.map((child) => (
        <RecursiveTreeNode key={child.id} item={child} />
      ))}
    </TreeNode>
  );
};

const RecursiveOrganizationChart = ({item} : RecursiveTreeNodeInterface) => {
  return (
    <Tree
      label={
        <Item
          id={item.id}
          name={item.nama}
          position={item.jabatan}
          offset={item.offset}
          childOffset={item.child_offsets}
        />
      }
    >
      <RecursiveTreeNode item={item} rootName={item.nama} />
    </Tree>
  );
};

export default RecursiveOrganizationChart;
