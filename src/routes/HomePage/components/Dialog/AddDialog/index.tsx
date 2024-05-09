import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import usePostPersonnel from "@/routes/HomePage/hooks/usePostPersonnel";
import personnelFormSchema from "@/routes/HomePage/entities/formSchema";
import { PersonnelDataInterface } from "@/routes/HomePage/hooks/types";
import DialogBody from "../components/DialogBody";

const AddDialog = () => {
  const form = useForm<z.infer<typeof personnelFormSchema>>({
    resolver: zodResolver(personnelFormSchema),
    defaultValues: {},
  });

  const handlePostPersonnel = async ({
    nama,
    jenis_kelamin,
    nrp,
    status,
    jabatan,
    pangkat,
    subsatker,
    subdit,
    bko,
  }: PersonnelDataInterface) => {
    await usePostPersonnel({
      nama,
      jenis_kelamin,
      nrp,
      status,
      jabatan,
      pangkat,
      subsatker,
      subdit,
      bko,
    });
  };

  return <DialogBody form={form} onAction={handlePostPersonnel} />;
};

export default AddDialog;
