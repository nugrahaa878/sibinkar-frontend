import { useState } from "react";
import { PersonnelAttribute } from "../types";
import axiosClient from "@/networks/apiClient";

const useGetAllPersonnelAttributes = () => {
  const [position, setPosition] = useState<PersonnelAttribute[]>([]);
  const [rank, setRank] = useState<PersonnelAttribute[]>([]);
  const [subSatKer, setSubSatKer] = useState<PersonnelAttribute[]>([]);
  const [subDit, setSubDit] = useState<PersonnelAttribute[]>([]);

  const fetchData = () => {
    axiosClient.get("/personil/jabatan").then((value) => {
      setPosition(value.data.data);
    });
    axiosClient.get("/personil/pangkat").then((value) => {
      setRank(value.data.data);
    });
    axiosClient.get("/personil/subsatker").then((value) => {
      setSubSatKer(value.data.data);
    });
    axiosClient.get("/personil/subdit").then((value) => {
      setSubDit(value.data.data);
    });
  };

  return {
    fetchData,
    position,
    rank,
    subSatKer,
    subDit,
  };
};

export default useGetAllPersonnelAttributes;
