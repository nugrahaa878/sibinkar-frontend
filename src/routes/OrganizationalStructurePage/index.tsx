import DefaultContainer from "@/components/DefaultContainer";
import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import RecursiveOrganizationChart from "./components/RecursiveOrganizationChart";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import useGetData from "./hooks/useGetData";
import usePostCreateNode from "./hooks/usePostCreateNode";

const OrganizationStructurePage = () => {
  const {
    listOrganization,
    organization,
    loading,
    initData,
    fetchOrganization,
  } = useGetData();

  useEffect(() => {
    initData();
  }, []);

  const handleFilterChange = (value: string) => {
    const orgId = Number(value);
    fetchOrganization(orgId);
  };

  const onCreateNode = async (
    parentId: number,
    name: string,
    position: string,
    offset: boolean
  ) => {
    await usePostCreateNode({
      organizationId: organization?.id.toString() ?? "",
      parentId,
      name,
      position,
      offset,
    });
    fetchOrganization(organization?.id!);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.organizationalStructure} />
      <DefaultContainer>
        <Header />
        <Toolbar
          data={listOrganization}
          selected={organization?.id.toString()}
          onFilterChange={handleFilterChange}
        />
        <div className="mx-10">
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              {!organization && <h1>Tidak ada data</h1>}
              {organization && (
                <RecursiveOrganizationChart item={organization.nodes!} onCreateNode={onCreateNode} />
              )}
            </>
          )}
        </div>
      </DefaultContainer>
    </div>
  );
};

export default OrganizationStructurePage;
