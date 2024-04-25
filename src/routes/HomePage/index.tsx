import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Toolbar from "./components/Toolbar";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "./components/Header";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/DataTable/columns";
import Navigation from "./components/Navigation";
import { Personnel } from "./entities/personnel";
import dummy_personnels from "./data/dummy-personnels";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import useGetPersonnel from "./hooks/useGetPersonnel";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const HomePage = () => {
  const { listPersonnel: listPersonnelApi, loading } = useGetPersonnel();
  const [listPersonnel, setListPersonnel] = useState<Personnel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const location = useLocation();
  const afterLogin = location.state?.afterLogin;

  const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const onGetPersonnel = async () => {
    await delay(3000);
    setListPersonnel(dummy_personnels);
  };

  useEffect(() => {
    if (afterLogin) {
      toast({
        title: "Logged In!",
        description: "Success login to your account",
      });
    }

    console.log({ listPersonnelApi, loading });

    setIsLoading(true);
    onGetPersonnel().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase} />

      <DefaultContainer>
        <Header />
        {isLoading && <Loader2 className="h-12 w-12 m-4 animate-spin" />}
        {!isLoading && <Toolbar />}
        {!isLoading && <DataTable data={listPersonnel} columns={columns} />}
        {!isLoading && <Navigation />}
      </DefaultContainer>

      <Toaster />
    </div>
  );
};

export default HomePage;
