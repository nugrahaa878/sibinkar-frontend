import ErrorDialog from "@/components/Dialog/ErrorDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDeletePersonnel from "@/routes/HomePage/hooks/useDeletePersonnel";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface Props {
  id: string;
}

const DeleteDialog = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dialogState, setDialogState] = useState<
    "success" | "failed" | "confirmation"
  >("confirmation");

  const handleOnConfirmDelete = () => {
    if (isLoading) return;
    setIsLoading(true);
    useDeletePersonnel({ id })
      .then((_) => {
        setDialogState("success");
      })
      .catch((_) => {
        setDialogState("failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOnClose = () => {
    setDialogState("confirmation");
  };

  return (
    <DialogContent onCloseAutoFocus={handleOnClose}>
      {dialogState === "confirmation" && (
        <>
          <DialogHeader>
            <DialogTitle>Hapus Data</DialogTitle>
            <DialogDescription>Yakin ingin menghapus data?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleOnConfirmDelete}>
              {isLoading ? <Loader2 className="animate-spin" /> : "Konfirmasi"}
            </Button>
          </DialogFooter>
        </>
      )}
      {dialogState === "success" && (
        <SuccessDialog message="Data berhasil dihapus" />
      )}
      {dialogState === "failed" && (
        <ErrorDialog message="Data gagal dihapus. Periksa jaringan Anda" />
      )}
    </DialogContent>
  );
};

export default DeleteDialog;
