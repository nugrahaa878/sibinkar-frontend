import { Button } from "@/components/ui/button";
import FilterDropdown from "../FilterDropdown";
import { DownloadIcon } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="flex w-full justify-between">
      <FilterDropdown />
      <div>
        <Button className="px-8">
          <DownloadIcon className="mr-2" /> Unduh
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
