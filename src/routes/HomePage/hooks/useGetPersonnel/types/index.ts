export interface Personnel {
  id: string;
  pangkat: string;
  subsatker: string;
  subdit: string;
  jabatan: string;
  nama: string;
  jenis_kelamin: string;
  nrp: number;
  bko: string;
  status: string;
}

export interface ListPersonnelResponseInterface {
  success: boolean;
  message: string;
  data?: {
    result: Personnel[];
    meta: {
      current_page: string;
      total_pages: string;
    };
  };
}
