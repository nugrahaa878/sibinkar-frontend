import { Personnel } from "../../useGetPersonnel/types";

export interface PersonnelResponseInterface {
  success: boolean;
  message: string;
  data?: Personnel;
}
