import { Tree, TreeNode } from "react-organizational-chart";
import Item from "../OrganizationChart/Item";
import { OrgNode } from "../../types";

interface RecursiveTreeNodeInterface {
  item: OrgNode;
  rootName?: string;
  onCreateNode: (
    parentId: number,
    name: string,
    position: string,
    offset: boolean
  ) => Promise<void>;
}

const RecursiveTreeNode = ({ item, rootName, onCreateNode }: RecursiveTreeNodeInterface) => {
  if (item.nama === rootName) {
    return item.child.map((child) => (
      <RecursiveTreeNode key={child.id} item={child} onCreateNode={onCreateNode} />
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
      {item.child?.map((child) => (
        <RecursiveTreeNode key={child.id} item={child} onCreateNode={onCreateNode} />
      ))}
    </TreeNode>
  );
};

const RecursiveOrganizationChart = ({item, onCreateNode} : RecursiveTreeNodeInterface) => {
  return (
    <Tree
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
      <RecursiveTreeNode item={item} rootName={item.nama} onCreateNode={onCreateNode} />
    </Tree>
  );
};

export default RecursiveOrganizationChart;
