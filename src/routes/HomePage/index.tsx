import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Toolbar from "./components/Toolbar";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase} />
      <DefaultContainer>
        <Header />
        <Toolbar />
      </DefaultContainer>
    </div>
  );
};

export default HomePage;
