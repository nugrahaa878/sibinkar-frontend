import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { MoreHorizontal } from "lucide-react";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditDialog from "../Dialog/EditDialog";
import { useState } from "react";
import { Personnel } from "../../entity/personnel";

interface Props {
  personnel: Personnel;
}

const Action = ({ personnel }: Props) => {
  const [actionType, setActionType] = useState("edit");

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => setActionType("edit")}>
              Ubah Data
            </DropdownMenuItem>
          </DialogTrigger>

          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => setActionType("delete")}>
              Hapus Data
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      {actionType === "delete" && <DeleteDialog />}
      {actionType === "edit" && <EditDialog personnel={personnel} />}
    </Dialog>
  );
};

export default Action;
