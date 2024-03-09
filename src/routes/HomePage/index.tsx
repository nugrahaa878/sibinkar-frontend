import {Navbar, NavbarPageEnum} from "@/components/Navbar";
import FilterDropdown from "./FilterDropdown";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Edit2 } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase}/>
      <div className="pt-16 px-24 w-full flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-darkBlue">Personnel Database</h1>
        <div className="flex w-full justify-between">
          <FilterDropdown />
          <div>
            <Button variant="outline" className="mr-6">
              <Edit2 className="mr-2"/> Edit Personil
            </Button>
            <Button>
              <DownloadIcon className="mr-2"/> Unduh
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
