import { useState } from "react";
import axiosClient from "../../../../networks/apiClient";
import { SubFilter } from "./types";

const useGetSubFilter = () => {
  const [loading, setLoading] = useState(false);
  const [subFilterData, setSubFilterData] = useState<SubFilter[]>([]);

  const fetchData = async (type: string) => {
    setLoading(true);
    let finalPath = "/personil/jabatan";

    switch (type) {
      case "jabatan":
        finalPath = "/personil/jabatan";
        break;
      case "pangkat":
        finalPath = "/personil/pangkat";
        break;
      case "subsatker":
        finalPath = "/personil/subsatker";
        break;
      case "subdit":
        finalPath = "/personil/subdit";
        break;
      case "delete":
        setSubFilterData([]);
        setLoading(false);
        return;
      default:
        finalPath = "/personil/pangkat";
    }

    const response = await axiosClient.get(finalPath);
    const data = await response.data.data;

    setLoading(false);
    setSubFilterData(data);
  };

  return {
    subFilterData,
    loading,
    fetchData,
  };
};

export default useGetSubFilter;
