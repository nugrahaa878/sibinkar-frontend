import { Tree, TreeNode } from "react-organizational-chart";
import Item from "../OrganizationChart/Item";
import { dummyData } from "./dummyData";
import { OrgNode } from "../../types";

interface RecursiveTreeNodeInterface {
  item: OrgNode;
  rootName?: string;
}

const RecursiveTreeNode = ({ item, rootName }: RecursiveTreeNodeInterface) => {
  if (item.name === rootName) {
    return (
      item.children &&
      item.children.map((child) => (
        <RecursiveTreeNode key={child.id} item={child} />
      ))
    );
  }

  return (
    <TreeNode
      label={<Item id={item.id} name={item.name} position={item.title} />}
    >
      {item.children &&
        item.children.map((child) => (
          <RecursiveTreeNode key={child.id} item={child} />
        ))}
    </TreeNode>
  );
};

const RecursiveOrganizationChart = () => {
  return (
    <Tree
      label={
        <Item
          id={dummyData.id}
          name={dummyData.name}
          position={dummyData.title}
        />
      }
    >
      <RecursiveTreeNode item={dummyData} rootName={dummyData.name} />
    </Tree>
  );
};

export default RecursiveOrganizationChart;
