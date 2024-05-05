import DefaultContainer from "@/components/DefaultContainer";
import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { Loader2 } from "lucide-react";
import Table from "./components/Table";
import useGetStaffingStatus from "./hooks/useGetStaffingStatus";

const StaffingStatusPage = () => {
  const { data, loading } = useGetStaffingStatus();

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.staffingStatus} />
      <DefaultContainer>
        <Header />
        {loading ? (
          <Loader2 className="h-12 w-12 m-4 animate-spin" />
        ) : (
          <>
            <Toolbar />
            <Table data={data?.data || []} />
          </>
        )}
      </DefaultContainer>
    </div>
  );
};

export default StaffingStatusPage;
