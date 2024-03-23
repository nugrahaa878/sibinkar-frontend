import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Personnel } from "@/routes/HomePage/entities/personnel";
import { useState } from "react";
import ConfirmationDialog from "@/components/Dialog/ConfirmationDialog";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import SuccessDialog from "@/components/Dialog/SuccessDialog";
import { Input } from "@/components/ui/input";
import data_bko from "@/routes/HomePage/data/data-bko";
import data_pangkat from "@/routes/HomePage/data/data-pangkat";
import data_status from "@/routes/HomePage/data/data-status";
import data_subdit from "@/routes/HomePage/data/data-subdit";
import data_subsatker from "@/routes/HomePage/data/data-subsatker";
import Dropdown from "../DialogDropdown";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import data_jabatan from "@/routes/HomePage/data/data-jabatan";
import Combobox from "../DialogCombobox";

interface Props {
  personnel: Personnel;
}

const EditDialog = ({ personnel }: Props) => {
  const [name, setName] = useState(personnel.name);
  const [gender, setGender] = useState<string>(personnel.gender);
  const [NRP, setNRP] = useState<number>(personnel.NRP);
  const [rank, setRank] = useState(personnel.rank);
  const [position, setPosition] = useState(personnel.position);
  const [subSatKer, setSubSatKer] = useState(personnel.subSatKer);
  const [subDit, setSubDit] = useState(personnel.subDit);
  const [BKO, setBKO] = useState(personnel.BKO);
  const [status, setStatus] = useState<string>(personnel.status);

  const [isLoadingState, setIsLoadingState] = useState(false);
  const [dialogState, setDialogState] = useState<
    "form" | "confirm" | "failed" | "success"
  >("form");

  const onSave = async (personnel: Personnel): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(personnel);
    return true;
  };

  const onButtonSave = async () => {
    if (dialogState === "form") {
      setDialogState("confirm");
      return;
    }
    setIsLoadingState(true);
    const personnel: Personnel = {
      number: 0,
      name,
      gender,
      NRP: NRP ? NRP : 0,
      rank,
      position,
      subSatKer,
      subDit,
      BKO,
      status,
    };
    const result = await onSave(personnel);
    setIsLoadingState(false);
    setDialogState(result ? "success" : "failed");
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
    setDialogState("form");
  };

  const handleCancelSave = () => {
    if (isLoadingState) {
      return;
    }
    setDialogState("form");
  };

  return (
    <DialogContent
      onCloseAutoFocus={handleClose}
      className={`${dialogState === "form" && "sm:max-w-2xl"}`}
    >
      {dialogState === "success" && (
        <SuccessDialog message="Data berhasil disimpan" />
      )}

      {dialogState === "failed" && (
        <ErrorDialog message="Gagal menyimpan data" />
      )}

      {dialogState === "confirm" && (
        <ConfirmationDialog
          title="Simpan Data"
          description="Anda yakin ingin menyimpan data?"
          isLoading={isLoadingState}
          onAccept={onButtonSave}
          onDecline={handleCancelSave}
        />
      )}

      {dialogState === "form" && (
        <div>
          <DialogTitle>Ubah Data Personil</DialogTitle>

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

            <Combobox
              value={position}
              onValueChange={setPosition}
              title="Jabatan"
              data={data_jabatan}
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
        </div>
      )}
    </DialogContent>
  );
};

export default EditDialog;
