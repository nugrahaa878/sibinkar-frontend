import {Navbar, NavbarPageEnum} from "@/components/Navbar";
import FilterCombobox from "./FilterDropdown";
import DownloadButton from "@/components/DownloadButton";
import EditDataButton from "@/components/EditDatabaseButton";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase}/>
      <div className="pt-16 px-24 w-full flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-darkBlue">Personnel Database</h1>
        <div className="flex w-full justify-between">
          <FilterCombobox />
          <div>
            <EditDataButton />
            <DownloadButton />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
