import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  title: string;
  count: number[];
}

const EditDialog = ({ title, count }: Props) => {
  const [IRJEN, setIRJEN] = useState<number>(count[0]);
  const [BRIGJEN, setBRIGJEN] = useState<number>(count[2]);
  const [KOMBES, setKOMBES] = useState<number>(count[4]);
  const [AKBP, setAKBP] = useState<number>(count[6]);
  const [KOMPOL, setKOMPOL] = useState<number>(count[8]);
  const [AKP, setAKP] = useState<number>(count[10]);
  const [IP, setIP] = useState<number>(count[12]);
  const [BRIGTA, setBRIGTA] = useState<number>(count[14]);
  const [jumlah, setJumlah] = useState<number>(16);
  const [IV, setIV] = useState<number>(count[18]);
  const [III, setIII] = useState<number>(count[20]);
  const [II, setII] = useState<number>(count[22]);
  const [jumlahPns, setJumlahPns] = useState<number>(count[24]);
  const ketDSP = count[26];
  const ketRIIL = count[27];
  const IRJENRIIL = count[1];
  const BRIGJENRIIL = count[3];
  const KOMBESRIIL = count[5];
  const AKBPRIIL = count[7];
  const KOMPOLRIIL = count[9];
  const AKPRIIL = count[11];
  const IPRIIL = count[13];
  const BRIGTARIIL = count[15];
  const jumlahRIIL = count[17];
  const IVRIIL = count[19];
  const IIIRIIL = count[21];
  const IIRIIL = count[23];
  const jumlahPnsRIIL = count[25];

  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dialogState, setDialogState] = useState<
    "form" | "confirm" | "failed" | "success"
  >("form");

  const onButtonSave = () => {};

  const handleCancelSave = () => {
    if (isLoadingState) {
      return;
    }
    setDialogState("form");
  };

  const handleClose = () => {
    setDialogState("form");
  };

  return (
    <DialogContent
      onCloseAutoFocus={handleClose}
      className={`${dialogState === "form" && "sm:max-w-2xl"}`}
    >
      {dialogState === "success" && (
        <SuccessDialog message="Data berhasil disimpan" />
      )}

      {dialogState === "failed" && (
        <ErrorDialog message="Gagal menyimpan data" />
      )}

      {dialogState === "confirm" && (
        <ConfirmationDialog
          title="Simpan Data"
          description="Anda yakin ingin menyimpan data?"
          isLoading={isLoadingState}
          onAccept={onButtonSave}
          onDecline={handleCancelSave}
        />
      )}

      {dialogState === "form" && (
        <>
          <DialogHeader>
            <DialogTitle>Edit {title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </>
      )}
    </DialogContent>
  );
};

export default EditDialog;
