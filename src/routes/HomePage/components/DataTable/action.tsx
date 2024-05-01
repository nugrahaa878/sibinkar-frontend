import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger, Dialog } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditDialog from "../Dialog/EditDialog";
import { useState } from "react";
import { Personnel } from "../../hooks/useGetPersonnel/types";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import useDeletePersonnel from "../../hooks/useDeletePersonnel";

interface Props {
  personnel: Personnel;
}

const Action = ({ personnel }: Props) => {
  const [actionType, setActionType] = useState("edit");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnConfirmDelete = () => {
    if (isLoading) return;
    setIsLoading(true);
    useDeletePersonnel({ id: personnel.id })
      .then((_) => {
        setActionType("success");
        setMessage("Data berhasil dihapus");
      })
      .catch((_) => {
        setActionType("error");
        setMessage("Data gagal dihapus. Periksa jaringan Anda");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      {actionType === "delete" && (
        <DialogContent className="sm:max-w-[425px]">
          <DeleteDialog
            onConfirmDelete={handleOnConfirmDelete}
            isLoading={isLoading}
          />
        </DialogContent>
      )}
      {actionType === "edit" && <EditDialog personnel={personnel} />}
      {actionType === "error" && (
        <DialogContent>
          <ErrorDialog message={message} />
        </DialogContent>
      )}
      {actionType === "success" && (
        <DialogContent>
          <SuccessDialog message={message} />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Action;
