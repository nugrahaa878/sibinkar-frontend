import axiosClient from "@/networks/apiClient";
import { useState } from "react";
import { Organization, OrgNode } from "../../types";

const useInit = () => {
  // IDENYA: PINDAH SEMUA USE STATE DI SINI, TERMASUK SETTER DATANYA
  const [loading, setLoading] = useState(false);
  const [listOrganization, setListOrganization] = useState<Organization[]>([]);
  const [organization, setOrganization] = useState<OrgNode>();

  const fetchListOrganization = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get("/organizational-structure/chart/");
      const result = await response.data.data;
      if(result && result.length > 0) {
        await fetchOrganization(result[0].id);
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
      const result = (await response.data.data.nodes);
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
    organization,
    loading,
    initData,
    fetchOrganization,
  };
};

export default useInit;
