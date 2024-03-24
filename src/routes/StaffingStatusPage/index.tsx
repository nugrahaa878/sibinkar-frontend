import DefaultContainer from "@/components/DefaultContainer";
import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const StaffingStatusPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    setIsLoading(true);
    delay(500).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.staffingStatus} />
      <DefaultContainer>
        <Header />
        {isLoading && <Loader2 className="h-12 w-12 m-4 animate-spin" />}
        {!isLoading && <Toolbar />}
      </DefaultContainer>
    </div>
  );
};

export default StaffingStatusPage;
