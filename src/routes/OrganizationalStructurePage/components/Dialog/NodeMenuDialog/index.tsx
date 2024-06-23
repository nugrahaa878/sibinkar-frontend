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
import {
  NodePersonnel,
  OrgNode,
} from "@/routes/OrganizationalStructurePage/types";
import { Checkbox } from "@/components/ui/checkbox";
import usePostCreateNode from "@/routes/OrganizationalStructurePage/hooks/usePostCreateNode";
import { useSWRConfig } from "swr";
import usePutEditNode from "@/routes/OrganizationalStructurePage/hooks/usePutEditNode";
import useDeleteNode from "@/routes/OrganizationalStructurePage/hooks/useDeleteNode";
import useGetPersonnel from "@/routes/HomePage/hooks/useGetPersonnel";
import Combobox from "./combobox";

interface Props {
  chartId: string;
  item: OrgNode;
  parentOffsetId?: number;
}

const NodeMenuDialog = ({ chartId, item, parentOffsetId }: Props) => {
  const { mutate } = useSWRConfig();
  const { listPersonnel } = useGetPersonnel({
    page: 1,
    limit: 2000000,
  });

  const [isLoadingState, setIsLoadingState] = useState<boolean>(false);
  const [dialogState, setDialogState] = useState<DialogState>(DialogState.menu);

  const [personnel, setPersonnel] = useState<NodePersonnel | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isOffset: false,
    },
  });

  const handleCreateNode = async () => {
    setIsLoadingState(true);
    const formValues = form.getValues();
    usePostCreateNode({
      item: item,
      organizationId: chartId,
      parentId: item.id,
      personnelId: personnel?.id ?? "",
      offset: formValues.isOffset,
      parentOffsetId: parentOffsetId,
    })
      .then((_) => {
        setDialogState(DialogState.success);
        mutate(`/organizational-structure/chart/${chartId}/`)
      })
      .catch(() => {
        setDialogState(DialogState.error);
      })
      .finally(() => {
        setIsLoadingState(false);
      });
    return;
  };

  const handleUpdateNode = async () => {
    setIsLoadingState(true);
    const formValues = form.getValues();
    // usePutEditNode({
    //   id: item.id,
    //   name: formValues.name,
    //   position: formValues.position,
    // })
    //   .then((_) => {
    //     setDialogState(DialogState.success);
    //     mutate(`/organizational-structure/chart/${chartId}/`)
    //   })
    //   .catch(() => {
    //     setDialogState(DialogState.error);
    //   })
    //   .finally(() => {
    //     setIsLoadingState(false);
    //   });
    return;
  };

  const handleDeleteNode = async () => {
    setIsLoadingState(true);
    useDeleteNode({
      nodeId: item.id,
      chartId: chartId,
    })
      .then((_) => {
        setDialogState(DialogState.success);
        mutate(`/organizational-structure/chart/${chartId}/`);
      })
      .catch(() => {
        setDialogState(DialogState.error);
      })
      .finally(() => {
        setIsLoadingState(false);
      });
    return;
  };

  const handleClose = () => {
    setDialogState(DialogState.menu);
    setIsLoadingState(false);
    setPersonnel(undefined);
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
    form.setValue("name", item.personnel.nama);
    setPersonnel(item.personnel);
    form.setValue("isOffset", item.offset);
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
          onAccept={handleDeleteNode}
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
            disabled={isLoadingState}
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
              onSubmit={form.handleSubmit(handleUpdateNode)}
              className="grid gap-4 py-4"
            >
              <Combobox
                form={form}
                name="name"
                label="Nama"
                placeholder="Pilih Anggota"
                searchPlaceholder="Cari Anggota..."
                data={listPersonnel || []}
                onSelectItem={setPersonnel}
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <h1>Jabatan: </h1>
                <h1 className="col-span-3">{personnel?.jabatan ?? "-"}</h1>
              </div>

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
              onSubmit={form.handleSubmit(handleCreateNode)}
              className="grid gap-4 py-4"
            >
             <Combobox
                form={form}
                name="name"
                label="Nama"
                placeholder="Pilih Anggota"
                searchPlaceholder="Cari Anggota..."
                data={listPersonnel || []}
                onSelectItem={setPersonnel}
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <h1>Jabatan: </h1>
                <h1 className="col-span-3">{personnel?.jabatan ?? "-"}</h1>
              </div>

              {!item.offset && !parentOffsetId && (
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
                <Button type="submit" disabled={isLoadingState}>
                  Simpan
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      )}
    </DialogContent>
  );
};

export default NodeMenuDialog;
