import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Toolbar from "./components/Toolbar";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "./components/Header";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/DataTable/columns";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import useGetPersonnel from "./hooks/useGetPersonnel";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [filterType, setFilterType] = useState<string>();
  const [filterValue, setFilterValue] = useState<string>();

  const { listPersonnel, loading, totalPages, mutate } = useGetPersonnel({
    page,
    limit: 10,
    filterType,
    filterValue,
  });

  const { toast } = useToast();
  const location = useLocation();

  const afterLogin = location.state?.afterLogin;

  useEffect(() => {
    if (afterLogin) {
      toast({
        title: "Logged In!",
        description: "Success login to your account",
      });
    }
  }, []);

  const onChangePage = (newPage: number) => {
    setPage(newPage);
    mutate();
  };

  const onApplyFilter = (type: string, value: string) => {
    setFilterType(type.toLowerCase());
    setFilterValue(value);
    mutate();
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase} />

      <DefaultContainer>
        <Header />
        <Toolbar onApplyFilter={onApplyFilter} />
        {loading ? (
          <Loader2 className="h-12 w-12 m-4 animate-spin" />
        ) : (
          <>
            <DataTable data={listPersonnel || []} columns={columns} />
            <Navigation
              currentPage={page}
              totalPages={Number(totalPages)}
              onChangePage={onChangePage}
            />
          </>
        )}
      </DefaultContainer>

      <Toaster />
    </div>
  );
};

export default HomePage;
