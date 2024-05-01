import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface Props {
  isLoading: boolean;
  onConfirmDelete: () => void;
}

const DeleteDialog = ({ onConfirmDelete, isLoading }: Props) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Hapus Data</DialogTitle>
        <DialogDescription>Yakin ingin menghapus data?</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={onConfirmDelete}>
          {isLoading ? <Loader2 className="animate-spin" /> : "Konfirmasi"}
        </Button>
      </DialogFooter>
    </>
  );
};

export default DeleteDialog;
