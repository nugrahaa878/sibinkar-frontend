import axiosClient from "@/networks/apiClient";
import { useState } from "react";

const useGetAllPersonnel = () => {
    const [position, setPosition] = useState<PersonnelAttribute[]>([]);

    const fetchData = () => {
      axiosClient.get("/personil/jabatan").then((value) => {
        setPosition(value.data.data);
      });
    };
  
    return {
      fetchData,
      position,
    };
  };
  
  export default useGetAllPersonnel;