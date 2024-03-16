import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data_bko from "@/routes/HomePage/data/data-bko";
import data_pangkat from "@/routes/HomePage/data/data-pangkat";
import data_status from "@/routes/HomePage/data/data-status";
import data_subdit from "@/routes/HomePage/data/data-subdit";
import data_subsatker from "@/routes/HomePage/data/data-subsatker";
import Dropdown from "./dropdown";

const PersonnelDialog = () => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="nama" className="">
          Nama
        </Label>
        <Input
          placeholder="Masukkan nama"
          id="nama"
          defaultValue=""
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4 w-full">
        <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
        <Select value="">
          <SelectTrigger className="md:w-[464px] sm:w-96">
            <SelectValue placeholder="Pilih Jenis Kelamin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="L">Laki-laki</SelectItem>
            <SelectItem value="P">Perempuan</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="NRP" className="">
          NRP
        </Label>
        <Input
          placeholder="Masukkan NRP"
          id="NRP"
          defaultValue=""
          className="col-span-3"
        />
      </div>
      <Dropdown
        placeholder="Pilih Pangkat"
        title="Pangkat"
        data={data_pangkat}
      />
      <Dropdown
        placeholder="Pilih Jabatan"
        title="SubSatKer"
        data={data_subsatker}
      />
      <Dropdown
        placeholder="Pilih SubSatKer"
        title="Pangkat"
        data={data_subsatker}
      />
      <Dropdown placeholder="Pilih SubDit" title="SubDit" data={data_subdit} />
      <Dropdown placeholder="Pilih BKO" title="BKO" data={data_bko} />
      <Dropdown placeholder="Pilih Status" title="Status" data={data_status} />
    </div>
  );
};

export default PersonnelDialog;
