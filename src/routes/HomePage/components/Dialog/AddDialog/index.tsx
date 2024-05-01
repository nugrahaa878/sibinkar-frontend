import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Dropdown from "../DialogDropdown";
import data_bko from "@/routes/HomePage/data/data-bko";
import data_pangkat from "@/routes/HomePage/data/data-pangkat";
import data_status from "@/routes/HomePage/data/data-status";
import data_subdit from "@/routes/HomePage/data/data-subdit";
import data_subsatker from "@/routes/HomePage/data/data-subsatker";
import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import data_jabatan from "@/routes/HomePage/data/data-jabatan";
import Combobox from "../DialogCombobox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import DialogInput from "../DialogInput";
import addPersonnelFormSchema from "./formSchema";
import DialogStateEnum from "./stateEnum";

const AddDialog = () => {
  const form = useForm<z.infer<typeof addPersonnelFormSchema>>({
    resolver: zodResolver(addPersonnelFormSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof addPersonnelFormSchema>) => {
    console.log(values);
  };

  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dialogState, setDialogState] = useState<DialogStateEnum>(
    DialogStateEnum.form
  );

  const onButtonSave = async () => {
    if (dialogState === DialogStateEnum.form) {
      setDialogState(DialogStateEnum.confirm);
      return;
    }
    setIsLoadingState(true);
    setIsLoadingState(false);
    setDialogState(DialogStateEnum.success);
    return;
  };

  const handleClose = () => {
    setDialogState(DialogStateEnum.form);
    form.reset();
  };

  const handleCancelSave = () => {
    if (isLoadingState) {
      return;
    }
    setDialogState(DialogStateEnum.form);
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
        <SuccessDialog message="Data berhasil disimpan" />
      )}

      {dialogState === DialogStateEnum.failed && (
        <ErrorDialog message="Gagal menyimpan data" />
      )}

      {dialogState === DialogStateEnum.confirm && (
        <ConfirmationDialog
          title="Simpan Data"
          description="Anda yakin ingin menyimpan data?"
          isLoading={isLoadingState}
          onAccept={onButtonSave}
          onDecline={handleCancelSave}
        />
      )}

      {dialogState === DialogStateEnum.form && (
        <div>
          <DialogTitle>Tambah Personil</DialogTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-4 py-4"
            >
              <DialogInput
                control={form.control}
                name="name"
                placeholder="Masukkan nama"
                label="Nama"
              />

              <Dropdown
                control={form.control}
                name="gender"
                data={["Laki-laki", "Perempuan"]}
                label="Jenis Kelamin"
                placeholder="Pilih jenis kelamin"
              />

              <DialogInput
                control={form.control}
                name="NRP"
                placeholder="Masukkan NRP"
                label="NRP"
                type="number"
              />

              <Dropdown
                control={form.control}
                name="rank"
                placeholder="Pilih Pangkat"
                label="Pangkat"
                data={data_pangkat}
              />

              <Combobox
                form={form}
                name="position"
                label="Jabatan"
                data={data_jabatan}
              />

              <Dropdown
                control={form.control}
                name="subSatKer"
                placeholder="Pilih SubSatKer"
                label="SubSatKer"
                data={data_subsatker}
              />

              <Dropdown
                control={form.control}
                name="subDit"
                placeholder="Pilih SubDit"
                label="SubDit"
                data={data_subdit}
              />

              <Dropdown
                control={form.control}
                name="BKO"
                placeholder="Pilih BKO"
                label="BKO"
                data={data_bko}
              />

              <Dropdown
                control={form.control}
                name="status"
                placeholder="Pilih Status"
                label="Status"
                data={data_status}
              />
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

export default AddDialog;
