import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import DialogState from "./state";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import { useForm } from "react-hook-form";
import formSchema from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import DialogInput from "./input";
import { OrgNode } from "@/routes/OrganizationalStructurePage/types";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  id: number;
  position: string;
  name: string;
  offset?: boolean;
  childOffset?: OrgNode[];
  parentOffsetId?: number;
}

const NodeMenuDialog = ({
  id,
  position,
  name,
  offset,
  childOffset,
  parentOffsetId,
}: Props) => {
  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);
  const [dialogState, setDialogState] = useState<DialogState>(DialogState.menu);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onButtonSave = async () => {
    // setIsLoadingState(true);
    // const formValues = form.getValues();
    // onAction({
    //   id: personnel?.id,
    //   nama: formValues.name,
    //   jenis_kelamin: formValues.gender,
    //   nrp: formValues.NRP,
    //   status: formValues.status,
    //   jabatan: positionId,
    //   pangkat: rankId,
    //   subsatker: subSatKerId,
    //   subdit: subDitId,
    //   bko: formValues.BKO,
    // })
    //   .then((_) => {
    //     setDialogState(DialogStateEnum.success);
    //   })
    //   .catch(() => {
    //     setDialogState(DialogStateEnum.failed);
    //   })
    //   .finally(() => {
    //     setIsLoadingState(false);
    //   });
    return;
  };

  const handleClose = () => {
    setDialogState(DialogState.menu);
    setIsLoadingState(false);
    form.reset();
  };

  const handleCancelDelete = () => {
    if (isLoadingState) {
      return;
    }
    setDialogState(DialogState.menu);
  };

  const handleDeleteMenu = () => {
    setDialogState(DialogState.delete);
  };

  const handleEditMenu = () => {
    form.setValue("name", name);
    form.setValue("position", position);
    form.setValue("isOffset", offset !== undefined);
    setDialogState(DialogState.edit);
  };

  const handleAddChildMenu = () => {
    setDialogState(DialogState.addChild);
  };

  return (
    <DialogContent onCloseAutoFocus={handleClose}>
      {dialogState === DialogState.success && (
        <SuccessDialog message="Data organisasi berhasil disimpan" />
      )}

      {dialogState === DialogState.error && (
        <ErrorDialog message="Gagal organisasi menyimpan data" />
      )}

      {dialogState === DialogState.delete && (
        <ConfirmationDialog
          title="Hapus keanggotaan?"
          description="Anggota ini dan seluruh anggota yang dibawahinya akan terhapus"
          isLoading={isLoadingState}
          onAccept={() => {}}
          onDecline={handleCancelDelete}
        />
      )}

      {dialogState === DialogState.menu && (
        <div className="flex flex-col">
          <Button variant="outline" onClick={handleEditMenu}>
            {" "}
            Ubah Data
          </Button>
          <Button
            variant="outline"
            className="my-4"
            onClick={handleAddChildMenu}
          >
            {" "}
            Tambah Anggota
          </Button>
          <Button
            variant="outline"
            className="border-red-500 text-red-500"
            onClick={handleDeleteMenu}
          >
            {" "}
            Hapus Data
          </Button>
        </div>
      )}

      {dialogState === DialogState.edit && (
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onButtonSave)}
              className="grid gap-4 py-4"
            >
              <DialogInput
                control={form.control}
                name="name"
                placeholder="Masukkan nama..."
                label="Nama"
              />
              <DialogInput
                control={form.control}
                name="position"
                placeholder="Masukkan jabatan..."
                label="Jabatan"
              />

              {!parentOffsetId && (
                <FormField
                  control={form.control}
                  name="isOffset"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormControl className="mr-4">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="h-full">
                        Bawahan tidak langsung
                      </FormLabel>
                    </FormItem>
                  )}
                />
              )}

              <DialogFooter>
                <Button type="submit">Simpan</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      )}

      {dialogState === DialogState.addChild && (
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onButtonSave)}
              className="grid gap-4 py-4"
            >
              <DialogInput
                control={form.control}
                name="name"
                placeholder="Masukkan nama..."
                label="Nama"
              />
              <DialogInput
                control={form.control}
                name="position"
                placeholder="Masukkan jabatan..."
                label="Jabatan"
              />

              {!offset && !parentOffsetId && (
                <FormField
                  control={form.control}
                  name="isOffset"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormControl className="mr-4">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>

                      <FormLabel className="h-full">
                        Bawahan tidak langsung
                      </FormLabel>
                    </FormItem>
                  )}
                />
              )}

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

export default NodeMenuDialog;
