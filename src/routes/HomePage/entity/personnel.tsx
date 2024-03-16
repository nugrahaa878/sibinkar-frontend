export type Personnel = {
  number: number;
  name: string;
  gender: "L" | "P";
  NRP: number;
  rank: string;
  position: string;
  subSatKer: string;
  subDit: string;
  BKO: string;
  status: "Aktif" | "Non Aktif" | "Cuti" | "Pensiun";
};
