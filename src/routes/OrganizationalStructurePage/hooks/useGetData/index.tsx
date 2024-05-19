import axiosClient from "@/networks/apiClient";
import { useState } from "react";
import { Organization } from "../../types";

const useInit = () => {
  const [loading, setLoading] = useState(false);
  const [listOrganization, setListOrganization] = useState<Organization[]>([]);
  const [organization, setOrganization] = useState<Organization>();

  const fetchListOrganization = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get("/organizational-structure/chart/");
      const result = await response.data.data;
      if(result && result.length > 0) {
        await fetchOrganization(result[result.length -1].id);
      }
      setListOrganization(result);
    } catch (e) {
      setLoading(false);
    }
  };

  const fetchOrganization = async (value: number) => {
    console.log(value)
    try {
      setLoading(true);
      const response = await axiosClient.get(`/organizational-structure/chart/${value}/`);
      const result = (await response.data.data);
      setOrganization(result);
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
    fetchOrganization,
  };
};

export default useInit;
