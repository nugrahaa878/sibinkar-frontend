import DefaultContainer from "@/components/DefaultContainer";
import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import RecursiveOrganizationChart from "./components/RecursiveOrganizationChart";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";

const OrganizationStructurePage = () => {
  const {
    listOrganization,
    loading,
    initData,
  } = useGetData();

  const [organizationId, setOrganzationId] = useState<string>(); 

  useEffect(() => {
    initData();
  }, []);

  const handleFilterChange = (value: string) => {
    setOrganzationId(value);
  };

  const onCreateNode = async (
    parentId: number,
    name: string,
    position: string,
    offset: boolean
  ) => {
    // await usePostCreateNode({
    //   organizationId: "",
    //   parentId,
    //   name,
    //   position,
    //   offset,
    // });
    // fetchOrganization(organization?.id!);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.organizationalStructure} />
      <DefaultContainer>
        <Header />
        <Toolbar
          data={listOrganization}
          selected={organizationId}
          onFilterChange={handleFilterChange}
        />
        <div className="mx-10">
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              {!organizationId && <h1>Tidak ada data</h1>}
              {organizationId && (
                <RecursiveOrganizationChart id={organizationId} onCreateNode={onCreateNode} />
              )}
            </>
          )}
        </div>
      </DefaultContainer>
    </div>
  );
};

export default OrganizationStructurePage;
