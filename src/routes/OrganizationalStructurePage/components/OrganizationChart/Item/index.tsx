import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrgNode } from "@/routes/OrganizationalStructurePage/types";
import NodeMenuDialog from "../../Dialog/NodeMenuDialog";

interface Props {
  chartId: string;
  item: OrgNode;
}

const Item = ({ chartId, item }: Props) => {
  if (item.offset) {
    return (
      <div>
        <Dialog>
          <div className="flex items-center justify-center">
            <div className="h-[70px] w-[1px] bg-black" />
            <div className="h-[1px] w-[100px] bg-black" />
            <DialogTrigger className="mr-[-300px]">
              <div className="w-[200px] h-[70px] p-3 bg-slate-500 rounded-lg items-center ">
                <div className="text-center text-white text-sm font-semibold">
                  {item.jabatan}
                </div>
                <div className="text-center text-white text-xs font-normal">
                  {item.nama}
                </div>
              </div>
            </DialogTrigger>
          </div>
          <NodeMenuDialog chartId={chartId} item={item} parentOffsetId={item.id} />
        </Dialog>

        {item.child_offsets.map((child) => {
          return (
            <Dialog>
              <div className="flex items-center justify-center">
                <div className="h-[90px] w-[1px] bg-black" />
                <DialogTrigger>
                  <div className="flex flex-col  items-center mr-[-300px] ml-[100px]">
                    <div className="h-[20px] w-[1px] bg-slate-500" />

                    <div className="w-[200px] h-[70px] p-3 bg-slate-500 rounded-lg">
                      <div className="text-center text-white text-sm font-semibold">
                        {child.jabatan}
                      </div>
                      <div className="text-center text-white text-xs font-normal">
                        {child.nama}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
              </div>
              <NodeMenuDialog
                chartId={chartId}
                item={child}
                parentOffsetId={item.id}
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
            {item.jabatan}
          </div>
          <div className="text-center text-white text-xs font-normal">
            {item.nama}
          </div>
        </div>
      </DialogTrigger>
      <NodeMenuDialog chartId={chartId} item={item} />
    </Dialog>
  );
};

export default Item;
