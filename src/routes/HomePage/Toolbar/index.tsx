import { Button } from "@/components/ui/button";
import FilterDropdown from "../FilterDropdown";
import { DownloadIcon, Edit2 } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="flex w-full justify-between">
      <FilterDropdown />
      <div>
        <Button variant="outline" className="mr-6">
          <Edit2 className="mr-2" /> Edit Personil
        </Button>
        <Button className="px-8">
          <DownloadIcon className="mr-2" /> Unduh
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
