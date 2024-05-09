interface PersonnelAttribute {
  id: number;
  nama: string;
}
interface PersonnelDataInterface {
  id?: string;
  nama?: string;
  jenis_kelamin?: string;
  nrp?: number;
  status?: string;
  jabatan?: number;
  pangkat?: number;
  subsatker?: number;
  subdit?: number;
  bko?: string;
}

export type { PersonnelAttribute, PersonnelDataInterface };
