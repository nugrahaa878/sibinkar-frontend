import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import personnelFormSchema from "@/routes/HomePage/entities/formSchema";
import { Personnel } from "@/routes/HomePage/hooks/useGetPersonnel/types";
import usePutPersonnel from "@/routes/HomePage/hooks/usePutPersonnel";
import DialogBody from "../components/DialogBody";
import { PersonnelDataInterface } from "@/routes/HomePage/hooks/types";

interface Props {
  personnel: Personnel;
}

const EditDialog = ({ personnel }: Props) => {
  const form = useForm<z.infer<typeof personnelFormSchema>>({
    resolver: zodResolver(personnelFormSchema),
    defaultValues: {
      name: personnel.nama,
      gender: personnel.jenis_kelamin
        .replace("L", "Laki-laki")
        .replace("P", "Perempuan"),
      NRP: personnel.nrp,
      rank: personnel.pangkat,
      position: personnel.jabatan,
      subSatKer: personnel.subsatker,
      subDit: personnel.subdit,
      BKO: personnel.bko,
      status: personnel.status,
    },
  });

  const handlePutPersonnel = async ({
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
  }: PersonnelDataInterface) => {
    await usePutPersonnel({
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
    });
  };

  return (
    <DialogBody
      personnel={personnel}
      form={form}
      onAction={handlePutPersonnel}
    />
  );
};

export default EditDialog;
