import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Toolbar from "./Toolbar";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase} />
      <div className="pt-16 px-24 w-full flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-darkBlue">
          Personnel Database
        </h1>
        <Toolbar />
      </div>
    </div>
  );
};

export default HomePage;
