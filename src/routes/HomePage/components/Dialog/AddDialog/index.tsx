import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Personnel } from "@/routes/HomePage/entity/personnel";
import Dropdown from "../DialogDropdown";
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
import { CheckCircle2Icon, Loader2Icon } from "lucide-react";

interface Props {
  onSave: (personnel: Personnel) => Promise<boolean>;
}

const AddDialog = ({ onSave }: Props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<string>("");
  const [NRP, setNRP] = useState<number>(0);
  const [rank, setRank] = useState("");
  const [position, setPosition] = useState("");
  const [subSatKer, setSubSatKer] = useState("");
  const [subDit, setSubDit] = useState("");
  const [BKO, setBKO] = useState("");
  const [status, setStatus] = useState<string>("");

  const [isConfirmState, setIsConfirmState] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [resultState, setResultState] = useState<"success" | "failed" | "hide">(
    "hide"
  );

  const onButtonSave = async () => {
    if (!isConfirmState) {
      setIsConfirmState(true);
      return;
    }
    setIsLoadingState(true);
    const personnel: Personnel = {
      number: 0,
      name,
      gender,
      NRP,
      rank,
      position,
      subSatKer,
      subDit,
      BKO,
      status,
    };
    const result = await onSave(personnel);
    setIsLoadingState(false);
    setResultState(result ? "success" : "failed");
    return;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNRPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(event.target.value);
    setNRP(number);
  };

  const handleClose = () => {
    setIsConfirmState(false);
    setResultState("hide");
  };

  const handleCancelSave = () => {
    if (isLoadingState) {
      return;
    }
    setIsConfirmState(false);
  };

  return (
    <DialogContent onCloseAutoFocus={handleClose} className="sm:max-w-2xl">
      {resultState === "hide" && (
        <DialogHeader>
          {isConfirmState && <DialogTitle>Simpan Data</DialogTitle>}
          {!isConfirmState && <DialogTitle>Tambah Personil</DialogTitle>}
        </DialogHeader>
      )}
      {resultState === "success" && (
        <div className="flex flex-col items-center">
          <CheckCircle2Icon className="h-40 w-40 mb-4 text-darkBlue" />
          <h1 className="font-bold text-xl text-blue-950">
            Data Berhasil Disimpan
          </h1>
        </div>
      )}
      {isConfirmState && resultState === "hide" && (
        <DialogDescription>Anda yakin ingin menyimpan data?</DialogDescription>
      )}
      {!isConfirmState && resultState === "hide" && (
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nama" className="">
              Nama
            </Label>
            <Input
              placeholder="Masukkan nama"
              id="nama"
              value={name}
              onChange={handleNameChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 w-full">
            <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
            <Select value={gender} onValueChange={setGender}>
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
              type="number"
              value={NRP}
              onChange={handleNRPChange}
              className="col-span-3"
            />
          </div>
          <Dropdown
            placeholder="Pilih Pangkat"
            title="Pangkat"
            value={rank}
            onValueChange={setRank}
            data={data_pangkat}
          />
          <Dropdown
            placeholder="Pilih Jabatan"
            title="Jabatan"
            value={position}
            onValueChange={setPosition}
            data={["Jabatan 1", "Jabatan 2"]}
          />
          <Dropdown
            placeholder="Pilih SubSatKer"
            title="SubSatKer"
            value={subSatKer}
            onValueChange={setSubSatKer}
            data={data_subsatker}
          />
          <Dropdown
            placeholder="Pilih SubDit"
            title="SubDit"
            value={subDit}
            onValueChange={setSubDit}
            data={data_subdit}
          />
          <Dropdown
            placeholder="Pilih BKO"
            title="BKO"
            value={BKO}
            onValueChange={setBKO}
            data={data_bko}
          />
          <Dropdown
            placeholder="Pilih Status"
            title="Status"
            value={status}
            onValueChange={setStatus}
            data={data_status}
          />
        </div>
      )}

      {resultState === "hide" && (
        <DialogFooter>
          {isConfirmState && (
            <Button className="bg-slate-500" onClick={handleCancelSave}>
              Batal
            </Button>
          )}
          <Button onClick={onButtonSave}>
            {isLoadingState && <Loader2Icon className="mr-2 animate-spin" />}{" "}
            Simpan
          </Button>
        </DialogFooter>
      )}
    </DialogContent>
  );
};

export default AddDialog;
