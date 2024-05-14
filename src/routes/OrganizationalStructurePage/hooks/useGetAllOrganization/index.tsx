import axiosClient from "@/networks/apiClient";
import { useState } from "react";

const useGetAllOrganization = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const fetchData = async () => {
    setLoading(true);

    const response = await axiosClient.get("/organization/");
    const result = await response.data.data;

    setLoading(false);
    setData(result);
  };

  return {
    data,
    loading,
    fetchData,
  };
};

export default useGetAllOrganization;
