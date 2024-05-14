import axiosClient from "@/networks/apiClient";
import { useState } from "react";
import { OrgNode } from "../../types";
import { dummyData } from "../../components/RecursiveOrganizationChart/dummyData";

const useInit = () => {
  // IDENYA: PINDAH SEMUA USE STATE DI SINI, TERMASUK SETTER DATANYA
  const [loading, setLoading] = useState(false);
  const [listOrganization, setListOrganization] = useState<string[]>([]);
  const [organization, setOrganization] = useState<OrgNode>();

  const sleep = async (ms) => {
    return await new Promise((resolve) => setTimeout(resolve, ms));
  };

  const fetchListOrganization = async () => {
    setLoading(true);
    await sleep(500);
    setLoading(false);
    setListOrganization(["SIKEU", "TAUD"]);
    // try {
    //   setLoading(true);
    //   const response = await axiosClient.get("/organization/");
    //   const result = (await response.data.data) ?? ["SIKEU", "TAUD"];
    //   setListOrganization(result);
    // } catch (e) {
    //   setLoading(false);
    //   setListOrganization(["SIKEU", "TAUD"]);
    // }
  };

  const fetchOrganization = async (value: string) => {
    setLoading(true);
    await sleep(500);
    setLoading(false);
    setOrganization(dummyData);
    // try {
    //   setLoading(true);
    //   const response = await axiosClient.get(`/organization/${value}`);
    //   const result = (await response.data.data) ?? dummyData;
    //   setOrganization(result);
    // } catch (e) {
    //   setLoading(false);
    //   setOrganization(dummyData);
    // }
  };

  const initData = async () => {
    await fetchListOrganization();
    await fetchOrganization(listOrganization[0]);
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
