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
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import staffingStatusSchema from "@/routes/StaffingStatusPage/entities/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Satker } from "@/routes/StaffingStatusPage/hooks/useGetStaffingStatus/types";
import {
  PnsPolriSatkerEnum,
  PolriSatkerEnum,
} from "@/routes/StaffingStatusPage/entities/satker-enum";

interface Props {
  title: string;
  data: Satker;
}

const EditDialog = ({ title, data }: Props) => {
  const polri = data.POLRI;
  const pnsPolri = data["PNS POLRI"];

  const form = useForm<z.infer<typeof staffingStatusSchema>>({
    resolver: zodResolver(staffingStatusSchema),
    defaultValues: {
      irjen: polri[PolriSatkerEnum.irjenPol]?.dsp || 0,
      brigjen: polri[PolriSatkerEnum.brigjenPol]?.dsp || 0,
      kombes: polri[PolriSatkerEnum.kombesPol]?.dsp || 0,
      akbp: polri[PolriSatkerEnum.akbp]?.dsp || 0,
      kompol: polri[PolriSatkerEnum.komPol]?.dsp || 0,
      akp: polri[PolriSatkerEnum.akp]?.dsp || 0,
      ip: polri[PolriSatkerEnum.ip]?.dsp || 0,
      brigta: polri[PolriSatkerEnum.brikTa]?.dsp || 0,
      iv: pnsPolri[PnsPolriSatkerEnum.iv]?.dsp || 0,
      iii: pnsPolri[PnsPolriSatkerEnum.iii]?.dsp || 0,
      ii: pnsPolri[PnsPolriSatkerEnum.ii]?.dsp || 0,
    },
  });

  const IRJENRIIL = polri[PolriSatkerEnum.irjenPol]?.rill || 0;
  const BRIGJENRIIL = polri[PolriSatkerEnum.brigjenPol]?.rill || 0;
  const KOMBESRIIL = polri[PolriSatkerEnum.kombesPol]?.rill || 0;
  const AKBPRIIL = polri[PolriSatkerEnum.akbp]?.rill || 0;
  const KOMPOLRIIL = polri[PolriSatkerEnum.komPol]?.rill || 0;
  const AKPRIIL = polri[PolriSatkerEnum.akp]?.rill || 0;
  const IPRIIL = polri[PolriSatkerEnum.ip]?.rill || 0;
  const BRIGTARIIL = polri[PolriSatkerEnum.brikTa]?.rill || 0;
  const IVRIIL = pnsPolri[PnsPolriSatkerEnum.iv]?.rill || 0;
  const IIIRIIL = pnsPolri[PnsPolriSatkerEnum.iii]?.rill || 0;
  const IIRIIL = pnsPolri[PnsPolriSatkerEnum.ii]?.rill || 0;

  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dialogState, setDialogState] = useState<
    "form" | "confirm" | "failed" | "success"
  >("form");

  const onSave = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(form.getValues());
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
        <div>
          <DialogHeader>
            <DialogTitle>Edit {title}</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onButtonSave)}
              className="flex-col pt-4"
            >
              <div className="flex">
                <div className="w-full">
                  <h1 className="font-bold text-md pb-3">POLRI</h1>
                  <DialogInput
                    title="IRJEN"
                    riil={IRJENRIIL}
                    control={form.control}
                    name="irjen"
                  />
                  <DialogInput
                    title="BRIGJEN"
                    riil={BRIGJENRIIL}
                    control={form.control}
                    name="brigjen"
                  />
                  <DialogInput
                    title="KOMBES"
                    riil={KOMBESRIIL}
                    control={form.control}
                    name="kombes"
                  />
                  <DialogInput
                    title="AKBP"
                    riil={AKBPRIIL}
                    control={form.control}
                    name="akbp"
                  />
                  <DialogInput
                    title="KOMPOL"
                    riil={KOMPOLRIIL}
                    control={form.control}
                    name="kompol"
                  />
                  <DialogInput
                    title="AKP"
                    riil={AKPRIIL}
                    control={form.control}
                    name="akp"
                  />
                  <DialogInput
                    title="IP"
                    riil={IPRIIL}
                    control={form.control}
                    name="ip"
                  />
                  <DialogInput
                    title="BRIG/TA"
                    riil={BRIGTARIIL}
                    control={form.control}
                    name="brigta"
                  />
                </div>

                <div className="pl-4 w-full">
                  <h1 className="font-bold text-md pb-3">PNS POLRI</h1>
                  <DialogInput
                    title="IV"
                    riil={IVRIIL}
                    control={form.control}
                    name="iv"
                  />
                  <DialogInput
                    title="III"
                    riil={IIIRIIL}
                    control={form.control}
                    name="iii"
                  />
                  <DialogInput
                    title="II/I"
                    riil={IIRIIL}
                    control={form.control}
                    name="ii"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button type="submit">Simpan</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      )}
    </DialogContent>
  );
};

export default EditDialog;
