import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import data_bko from "@/routes/HomePage/data/data-bko";
import data_status from "@/routes/HomePage/data/data-status";
import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import useGetAllPersonnelAttributes from "@/routes/HomePage/hooks/useGetAllPersonnelAttributes";
import personnelFormSchema from "@/routes/HomePage/entities/formSchema";
import { Personnel } from "@/routes/HomePage/hooks/useGetPersonnel/types";
import DialogStateEnum from "@/routes/HomePage/entities/enum";
import Combobox from "../DialogCombobox";
import Dropdown from "../DialogDropdown";
import DialogInput from "../DialogInput";
import { PersonnelDataInterface } from "@/routes/HomePage/hooks/types";
import useGetPersonnel from "@/routes/HomePage/hooks/useGetPersonnel";

interface Props {
  personnel?: Personnel;
  form: UseFormReturn<z.infer<typeof personnelFormSchema>>;
  onAction: ({
    id,
    nama,
    jenis_kelamin,
    nrp,
    status,
    jabatan,
    pangkat,
    subsatker,
    subdit,
    bko,
  }: PersonnelDataInterface) => Promise<any>;
}

const DialogBody = ({ personnel, form, onAction }: Props) => {
  const { position, rank, subSatKer, subDit, fetchData } =
    useGetAllPersonnelAttributes();

  const { mutate: refetchGetPersonnel } = useGetPersonnel({
    limit: 10,
    page: 1,
  });

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
    onAction({
      id: personnel?.id,
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
        refetchGetPersonnel();
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
          <DialogTitle>Data Personil</DialogTitle>

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
                defaultValue={form.getValues().gender}
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

export default DialogBody;
