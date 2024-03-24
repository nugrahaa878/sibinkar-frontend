import { Button } from "@/components/ui/button";
import { DownloadIcon, FileSpreadsheet, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Toolbar = () => {
  return (
    <div className="flex w-full justify-end">
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
  );
};

export default Toolbar;
