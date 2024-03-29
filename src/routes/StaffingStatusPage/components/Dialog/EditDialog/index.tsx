import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import DialogInput from "../DialogInput";

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
  const [jumlah] = useState<number>(16);
  const [IV, setIV] = useState<number>(count[18]);
  const [III, setIII] = useState<number>(count[20]);
  const [II, setII] = useState<number>(count[22]);
  const [jumlahPns] = useState<number>(count[24]);
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

  const handleIRJENChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setIRJEN(number);
  };

  const handleBRIGJENChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setBRIGJEN(number);
  };

  const handleKOMBESChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setKOMBES(number);
  };

  const handleAKBPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setAKBP(number);
  };

  const handleKOMPOLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setKOMPOL(number);
  };

  const handleAKPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setAKP(number);
  };

  const handleIPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setIP(number);
  };

  const handleBRIGTAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setBRIGTA(number);
  };

  const handleIVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setIV(number);
  };

  const handleIIIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setIII(number);
  };

  const handleIIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setII(number);
  };

  const onSave = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true;
  };

  const onButtonSave = async () => {
    setIsLoadingState(false);
    if (dialogState === "form") {
      setDialogState("confirm");
      return;
    }
    setIsLoadingState(true);
    const result = await onSave();
    setIsLoadingState(false);
    setDialogState(result ? "success" : "failed");
    return;
  };

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
          <div className="flex pt-4">
            <div className="w-full">
              <h1 className="font-bold text-md pb-3">POLRI</h1>
              <DialogInput
                title="IRJEN"
                riil={IRJENRIIL}
                dsp={IRJEN}
                onChange={handleIRJENChange}
              />
              <DialogInput
                title="BRIGJEN"
                riil={BRIGJENRIIL}
                dsp={BRIGJEN}
                onChange={handleBRIGJENChange}
              />
              <DialogInput
                title="KOMBES"
                riil={KOMBESRIIL}
                dsp={KOMBES}
                onChange={handleKOMBESChange}
              />
              <DialogInput
                title="AKBP"
                riil={AKBPRIIL}
                dsp={AKBP}
                onChange={handleAKBPChange}
              />
              <DialogInput
                title="KOMPOL"
                riil={KOMPOLRIIL}
                dsp={KOMPOL}
                onChange={handleKOMPOLChange}
              />
              <DialogInput
                title="AKP"
                riil={AKPRIIL}
                dsp={AKP}
                onChange={handleAKPChange}
              />
              <DialogInput
                title="IP"
                riil={IPRIIL}
                dsp={IP}
                onChange={handleIPChange}
              />
              <DialogInput
                title="BRIG/TA"
                riil={BRIGTARIIL}
                dsp={BRIGTA}
                onChange={handleBRIGTAChange}
              />
              <DialogInput
                title="Jumlah"
                riil={jumlahRIIL}
                dsp={jumlah}
                disabled
              />
            </div>
            <div className="pl-4 w-full">
              <h1 className="font-bold text-md pb-3">PNS POLRI</h1>
              <DialogInput
                title="IV"
                riil={IVRIIL}
                dsp={IV}
                onChange={handleIVChange}
              />
              <DialogInput
                title="III"
                riil={IIIRIIL}
                dsp={III}
                onChange={handleIIIChange}
              />
              <DialogInput
                title="II/I"
                riil={IIRIIL}
                dsp={II}
                onChange={handleIIChange}
              />
              <DialogInput
                title="Jumlah"
                riil={jumlahPnsRIIL}
                dsp={jumlahPns}
                disabled
              />
              <DialogInput title="Ket" riil={ketRIIL} dsp={ketDSP} disabled />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={onButtonSave}>Simpan</Button>
          </DialogFooter>
        </>
      )}
    </DialogContent>
  );
};

export default EditDialog;
