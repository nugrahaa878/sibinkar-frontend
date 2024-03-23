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

const HomePage = () => {
  const [listPersonnel, setListPersonnel] = useState<Personnel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const onGetPersonnel = async () => {
    await delay(3000);
    setListPersonnel(dummy_personnels);
  };

  useEffect(() => {
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
    </div>
  );
};

export default HomePage;
