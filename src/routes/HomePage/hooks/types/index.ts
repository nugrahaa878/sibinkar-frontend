export interface GeneralPersonnelItem {
  id: number;
  nama: string;
}

export interface ListGeneralPersonnelItemResponse {
  success: boolean;
  message: string;
  data?: GeneralPersonnelItem[];
}
