import axiosClient from "@/networks/apiClient";
import { useState } from "react";
import { Organization } from "../../types";

const useInit = () => {
  const [loading, setLoading] = useState(false);
  const [listOrganization, setListOrganization] = useState<Organization[]>([]);

  const fetchListOrganization = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get("/organizational-structure/chart/");
      const result = await response.data.data;
      setListOrganization(result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const initData = async () => {
    await fetchListOrganization();
  };

  return {
    listOrganization,
    loading,
    initData,
  };
};

export default useInit;
