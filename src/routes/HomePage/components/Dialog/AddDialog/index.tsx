import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Dropdown from "../components/DialogDropdown";
import data_bko from "@/routes/HomePage/data/data-bko";
import data_status from "@/routes/HomePage/data/data-status";
import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import Combobox from "../components/DialogCombobox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import DialogInput from "../components/DialogInput";
import DialogStateEnum from "../../../entities/enum";
import useGetAllPersonnelAttributes from "@/routes/HomePage/hooks/useGetAllPersonnelAttributes";
import usePostPersonnel from "@/routes/HomePage/hooks/usePostPersonnel";
import personnelFormSchema from "@/routes/HomePage/entities/formSchema";

const AddDialog = () => {
  const form = useForm<z.infer<typeof personnelFormSchema>>({
    resolver: zodResolver(personnelFormSchema),
    defaultValues: {},
  });
  const { position, rank, subSatKer, subDit, fetchData } =
    useGetAllPersonnelAttributes();

  const [isLoadingState, setIsLoadingState] = useState(false);
  const [positionId, setPositionId] = useState<number>();
  const [rankId, setRankId] = useState<number>();
  const [subSatKerId, setSubSatKerId] = useState<number>();
  const [subDitId, setSubDitId] = useState<number>();
  const [dialogState, setDialogState] = useState<DialogStateEnum>(
    DialogStateEnum.form
  );

  useEffect(() => {
    fetchData();
  }, []);

  const onButtonSave = async () => {
    if (dialogState === DialogStateEnum.form) {
      setDialogState(DialogStateEnum.confirm);
      return;
    }
    setIsLoadingState(true);
    const formValues = form.getValues();
    usePostPersonnel({
      nama: formValues.name,
      jenis_kelamin: formValues.gender,
      nrp: formValues.NRP,
      status: formValues.status,
      jabatan: positionId,
      pangkat: rankId,
      subsatker: subSatKerId,
      subdit: subDitId,
      bko: formValues.BKO,
    })
      .then((_) => {
        setDialogState(DialogStateEnum.success);
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
    setDialogState(DialogStateEnum.form);
    setIsLoadingState(false);
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
              onSubmit={form.handleSubmit(onButtonSave)}
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

              <Combobox
                form={form}
                name="rank"
                label="Pangkat"
                placeholder="Pilih Pangkat"
                searchPlaceholder="Cari Pangkat..."
                data={rank}
                onSelectItem={setRankId}
              />

              <Combobox
                form={form}
                name="position"
                label="Jabatan"
                placeholder="Pilih Jabatan"
                searchPlaceholder="Cari Jabatan..."
                data={position}
                onSelectItem={setPositionId}
              />

              <Combobox
                form={form}
                name="subSatKer"
                label="SubSatKer"
                placeholder="Pilih SubSatKer"
                searchPlaceholder="Cari SubSatKer..."
                data={subSatKer}
                onSelectItem={setSubSatKerId}
              />

              <Combobox
                form={form}
                name="subDit"
                label="SubDit"
                placeholder="Pilih SubDit"
                searchPlaceholder="Cari SubDit..."
                data={subDit}
                onSelectItem={setSubDitId}
              />

              <Combobox
                form={form}
                name="BKO"
                label="BKO"
                placeholder="Pilih BKO"
                searchPlaceholder="Cari BKO..."
                data={data_bko}
              />

              <Combobox
                form={form}
                name="status"
                label="Status"
                placeholder="Pilih Status"
                searchPlaceholder="Cari Status..."
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
