import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import DialogStateEnum from "@/components/Dialog/state";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import {
  DialogContent,
} from "@/components/ui/dialog";
import useDeleteOrganization from "@/routes/OrganizationalStructurePage/hooks/useDeleteOrganization";
import { useState } from "react";
import { useSWRConfig } from "swr";

interface Props {
  id: string;
}

const DeleteOrganizationDialog = ({ id }: Props) => {
  const { mutate } = useSWRConfig();
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dialogState, setDialogState] = useState<DialogStateEnum>(
    DialogStateEnum.confirm
  );

  const onButtonDelete = async () => {
    if (dialogState === DialogStateEnum.form) {
      setDialogState(DialogStateEnum.confirm);
      return;
    }
    setIsLoadingState(true);
    useDeleteOrganization({
      id
    })
      .then((_) => {
        setDialogState(DialogStateEnum.success);
        mutate(`/organizational-structure/chart/`);
      })
      .catch(() => {
        setDialogState(DialogStateEnum.failed);
      })
      .finally(() => {
        setIsLoadingState(false);
      });
    return;
  };

  const handleClose = () => {
    setDialogState(DialogStateEnum.confirm);
    setIsLoadingState(false);
  };

  const handleCancelDelete = () => {
    if (isLoadingState) {
      return;
    }
    setDialogState(DialogStateEnum.confirm);
  };

  return (
    <DialogContent
      onCloseAutoFocus={handleClose}
      className={`${
        dialogState === DialogStateEnum.form &&
        "sm:max-w-2xl max-h-[90dvh] overflow-y-scroll"
      }`}
    >
      {dialogState === DialogStateEnum.success && (
        <SuccessDialog message="Data berhasil dihapus" />
      )}

      {dialogState === DialogStateEnum.failed && (
        <ErrorDialog message="Gagal menghapus data" />
      )}

      {dialogState === DialogStateEnum.confirm && (
        <ConfirmationDialog
          title="Simpan Data"
          description="Anda yakin ingin menghapus organisasi?"
          acceptLabel="Hapus"
          isLoading={isLoadingState}
          onAccept={onButtonDelete}
          onDecline={handleCancelDelete}
        />
      )}
    </DialogContent>
  );
};

export default DeleteOrganizationDialog;