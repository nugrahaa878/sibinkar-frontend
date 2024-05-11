import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrgNode } from "@/routes/OrganizationalStructurePage/types";
import NodeMenuDialog from "../../Dialog/NodeMenuDialog";

interface Props {
  id: number;
  position: string;
  name: string;
  offset?: number;
  childOffset?: OrgNode[];
}

const Item = ({ id, position, name, offset, childOffset }: Props) => {
  if (offset) {
    return (
      <div>
        <Dialog>
          <div className="flex items-center justify-center">
            <div className="h-[70px] w-[1px] bg-black" />
            <div className="h-[1px] w-[100px] bg-black" />
            <DialogTrigger className="mr-[-300px]">
              <div className="w-[200px] h-[70px] p-3 bg-red-500 rounded-lg items-center ">
                <div className="text-center text-white text-sm font-semibold">
                  {position}
                </div>
                <div className="text-center text-white text-xs font-normal">
                  {name}
                </div>
              </div>
            </DialogTrigger>
          </div>
          <NodeMenuDialog
            id={id}
            position={position}
            name={name}
            offset={offset}
            childOffset={childOffset}
          />
        </Dialog>

        {childOffset?.map((item) => {
          return (
            <Dialog>
              <div className="flex items-center justify-center">
                <div className="h-[90px] w-[1px] bg-black" />
                <DialogTrigger>
                  <div className="flex flex-col  items-center mr-[-300px] ml-[100px]">
                    <div className="h-[20px] w-[1px] bg-red-500" />

                    <div className="w-[200px] h-[70px] p-3 bg-green-500 rounded-lg">
                      <div className="text-center text-white text-sm font-semibold">
                        {item.title}
                      </div>
                      <div className="text-center text-white text-xs font-normal">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
              </div>
              <NodeMenuDialog
                id={item.id}
                position={item.title}
                name={item.name}
                parentOffsetId={id}
              />
            </Dialog>
          );
        })}
      </div>
    );
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-[200px] h-[70px] bg-slate-500 rounded-lg flex-col justify-center items-center inline-flex">
          <div className="text-center text-white text-sm font-semibold">
            {position}
          </div>
          <div className="text-center text-white text-xs font-normal">
            {name}
          </div>
        </div>
      </DialogTrigger>
      <NodeMenuDialog
        id={id}
        position={position}
        name={name}
        offset={offset}
        childOffset={childOffset}
      />
    </Dialog>
  );
};

export default Item;
