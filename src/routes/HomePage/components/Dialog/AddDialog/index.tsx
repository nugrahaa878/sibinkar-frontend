import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
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
import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";

interface Props {
  onSave: (personnel: Personnel) => Promise<DefaultResponse>;
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
    if (resultState === "hide" && !isConfirmState) {
      return;
    }

    setIsConfirmState(false);
    setResultState("hide");
    return;
  };

  const handleCancelSave = () => {
    if (isLoadingState) {
      return;
    }
    setIsConfirmState(false);
  };

  if (resultState === "success") {
    return (
      <SuccessDialog onClose={handleClose} message="Data berhasil disimpan" />
    );
  }

  if (resultState === "failed") {
    return <ErrorDialog onClose={handleClose} message="Gagal menyimpan data" />;
  }

  if (isConfirmState) {
    return (
      <ConfirmationDialog
        title="Simpan Data"
        description="Anda yakin ingin menyimpan data?"
        isLoading={isLoadingState}
        onAccept={onButtonSave}
        onDecline={handleCancelSave}
        onClose={handleClose}
      />
    );
  }

  return (
    <DialogContent className="sm:max-w-2xl">
      <DialogTitle>Tambah Personil</DialogTitle>

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

      <DialogFooter>
        <Button onClick={onButtonSave}>Simpan</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddDialog;
