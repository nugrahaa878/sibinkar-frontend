import { Button } from "@/components/ui/button";
import FilterDropdown from "../FilterDropdown";
import { DownloadIcon, FileSpreadsheet, FileText, Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddDialog from "../Dialog/AddDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  onApplyFilter: (type: string, value: string) => void;
}

const Toolbar = ({ onApplyFilter }: Props) => {
  return (
    <div className="flex w-full justify-between">
      <FilterDropdown onApplyFilter={onApplyFilter} />

      <Dialog>
        <div>
          <DialogTrigger asChild>
            <Button variant="outline" className="mr-6">
              <Plus className="mr-2" /> Tambah Personil
            </Button>
          </DialogTrigger>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="px-8">
                <DownloadIcon className="mr-2" /> Unduh
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-primary">
              <DropdownMenuItem className="bg-primary text-white">
                <FileText className="mr-2" />
                PDF
              </DropdownMenuItem>

              <DropdownMenuItem className="bg-primary text-white">
                <FileSpreadsheet className="mr-2" />
                Microsoft Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <AddDialog />
      </Dialog>
    </div>
  );
};

export default Toolbar;
