export interface GeneralPersonnelItem {
  id: number;
  nama: string;
}

export interface ListGeneralPersonnelItemResponse {
  success: boolean;
  message: string;
  data?: GeneralPersonnelItem[];
}

export interface PersonnelDataInterface {
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
