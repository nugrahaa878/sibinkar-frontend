import { Tree, TreeNode } from "react-organizational-chart";
import Item from "./Item";

const OrganizationChart = () => {
  return (
    <Tree
      label={
        <div className="w-[200px] h-[70px] bg-slate-500 rounded-lg flex-col justify-center items-center inline-flex">
          <div className="text-center text-white text-sm font-semibold">
            KASIKEU
          </div>
          <div className="text-center text-white text-xs font-normal">
            AKBP Didik Sugiono, S.E
          </div>
        </div>
      }
    >
      <TreeNode
        label={
          <Item
            id={4}
            position="BAMIN"
            name="AGUS"
            offset={1}
            childOffset={[]}
          />
        }
      >
        <TreeNode
          label={
            <Item id={1} position="PAMIN TU" name="AKBP TU" childOffset={[]} />
          }
        >
          <TreeNode
            label={
              <Item id={2} position="BAMIN" name="AGUS" childOffset={[]} />
            }
          />
        </TreeNode>
        <TreeNode
          label={
            <Item
              id={3}
              position="PAMIN URDAL"
              name="AKBP URDAL"
              childOffset={[]}
            />
          }
        >
          <TreeNode
            label={
              <Item
                id={3}
                position="PAMIN URDAL"
                name="AKBP URDAL"
                offset={1}
                childOffset={[]}
              />
            }
          >
            <TreeNode
              label={
                <Item id={4} position="BAMIN" name="AGUS" childOffset={[]} />
              }
            />
            <TreeNode
              label={
                <Item id={4} position="BAMIN" name="AGUS" childOffset={[]} />
              }
            />
          </TreeNode>
        </TreeNode>
        <TreeNode
          label={
            <Item
              id={5}
              position="PAMIN YANPIM"
              name="AKBP YANI"
              childOffset={[]}
            />
          }
        >
          <TreeNode
            label={
              <Item
                id={6}
                position="BAMIN"
                name="BAGUS URIP"
                offset={1}
                childOffset={[
                  { id: 6, position: "BAMIN", name: "BAGUS URIP" },
                  { id: 6, position: "BAMIN", name: "BAGUS PURBA" },
                  { id: 6, position: "BAMIN", name: "BAGUS SUTISNA" },
                ]}
              />
            }
          >
            <TreeNode
              label={
                <Item
                  id={5}
                  position="PAMIN YANPIM"
                  name="AKBP YANI"
                  childOffset={[]}
                />
              }
            >
              <TreeNode
                label={
                  <Item id={6} position="BAMIN" name="AGUS" childOffset={[]} />
                }
              />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </Tree>
  );
};

export default OrganizationChart;
