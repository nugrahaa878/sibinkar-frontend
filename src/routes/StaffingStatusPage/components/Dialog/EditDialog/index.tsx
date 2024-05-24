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
import staffingStatusSchema from "@/routes/StaffingStatusPage/types/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Satker } from "@/routes/StaffingStatusPage/types";
import {
  PnsPolriSatkerEnum,
  PolriSatkerEnum,
} from "@/routes/StaffingStatusPage/types/satkerEnum";
import usePostStaffingStatus from "@/routes/StaffingStatusPage/hooks/usePostStaffingStatus";
import { useSWRConfig } from "swr";

interface Props {
  title: string;
  data: Satker;
}

const EditDialog = ({ title, data }: Props) => {
  const { mutate } = useSWRConfig();

  const polri = data.POLRI;
  const pnsPolri = data["PNS POLRI"];

  const irjen = polri[PolriSatkerEnum.irjenPol];
  const brigjen = polri[PolriSatkerEnum.brigjenPol];
  const kombes = polri[PolriSatkerEnum.kombesPol];
  const akbp = polri[PolriSatkerEnum.akbp];
  const kompol = polri[PolriSatkerEnum.komPol];
  const akp = polri[PolriSatkerEnum.akp];
  const ip = polri[PolriSatkerEnum.ip];
  const brigta = polri[PolriSatkerEnum.brikTa];
  const iv = pnsPolri[PnsPolriSatkerEnum.iv];
  const iii = pnsPolri[PnsPolriSatkerEnum.iii];
  const ii = pnsPolri[PnsPolriSatkerEnum.ii];

  const form = useForm<z.infer<typeof staffingStatusSchema>>({
    resolver: zodResolver(staffingStatusSchema),
    defaultValues: {
      irjen: irjen?.dsp || 0,
      brigjen: brigjen?.dsp || 0,
      kombes: kombes?.dsp || 0,
      akbp: akbp?.dsp || 0,
      kompol: kompol?.dsp || 0,
      akp: akp?.dsp || 0,
      ip: ip?.dsp || 0,
      brigta: brigta?.dsp || 0,
      iv: iv?.dsp || 0,
      iii: iii?.dsp || 0,
      ii: ii?.dsp || 0,
    },
  });

  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dialogState, setDialogState] = useState<
    "form" | "confirm" | "failed" | "success"
  >("form");

  const onButtonSave = async () => {
    setIsLoadingState(false);
    if (dialogState === "form") {
      setDialogState("confirm");
      return;
    }
    setIsLoadingState(true);
    const formValues = form.getValues();
    usePostStaffingStatus({
      satker: data.satker,
      irjenPol: formValues.irjen || 0,
      brigjenPol: formValues.brigjen || 0,
      kombesPol: formValues.kombes || 0,
      akbp: formValues.akbp || 0,
      komPol: formValues.kompol || 0,
      akp: formValues.akp || 0,
      ip: formValues.ip || 0,
      brikTa: formValues.brigta || 0,
      iv: formValues.iv || 0,
      iii: formValues.iii || 0,
      ii: formValues.ii || 0,
    })
      .then((_) => {
        setDialogState("success");
        mutate("/staffing-status/total/");
        mutate("/staffing-status/");
      })
      .catch(() => {
        setDialogState("failed");
      })
      .finally(() => {
        setIsLoadingState(false);
      });
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
    form.reset();
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
                    riil={irjen?.rill || 0}
                    control={form.control}
                    name="irjen"
                  />
                  <DialogInput
                    title="BRIGJEN"
                    riil={brigjen?.rill || 0}
                    control={form.control}
                    name="brigjen"
                  />
                  <DialogInput
                    title="KOMBES"
                    riil={kombes?.rill || 0}
                    control={form.control}
                    name="kombes"
                  />
                  <DialogInput
                    title="AKBP"
                    riil={akbp?.rill || 0}
                    control={form.control}
                    name="akbp"
                  />
                  <DialogInput
                    title="KOMPOL"
                    riil={kompol?.rill || 0}
                    control={form.control}
                    name="kompol"
                  />
                  <DialogInput
                    title="AKP"
                    riil={akp?.rill || 0}
                    control={form.control}
                    name="akp"
                  />
                  <DialogInput
                    title="IP"
                    riil={ip?.rill || 0}
                    control={form.control}
                    name="ip"
                  />
                  <DialogInput
                    title="BRIG/TA"
                    riil={brigta?.rill || 0}
                    control={form.control}
                    name="brigta"
                  />
                </div>

                <div className="pl-4 w-full">
                  <h1 className="font-bold text-md pb-3">PNS POLRI</h1>
                  <DialogInput
                    title="IV"
                    riil={iv?.rill || 0}
                    control={form.control}
                    name="iv"
                  />
                  <DialogInput
                    title="III"
                    riil={iii?.rill || 0}
                    control={form.control}
                    name="iii"
                  />
                  <DialogInput
                    title="II/I"
                    riil={ii?.rill || 0}
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
