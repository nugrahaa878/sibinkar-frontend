import { Button } from "@/components/ui/button";
import FilterDropdown from "../FilterDropdown";
import { DownloadIcon, Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddDialog from "../Dialog/AddDialog";

const Toolbar = () => {
  return (
    <div className="flex w-full justify-between">
      <FilterDropdown />
      <Dialog>
        <div>
          <DialogTrigger asChild>
            <Button variant="outline" className="mr-6">
              <Plus className="mr-2" /> Tambah Personil
            </Button>
          </DialogTrigger>
          <Button className="px-8">
            <DownloadIcon className="mr-2" /> Unduh
          </Button>
        </div>
        <AddDialog />
      </Dialog>
    </div>
  );
};

export default Toolbar;
