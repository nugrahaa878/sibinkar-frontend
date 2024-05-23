import { Button } from "@/components/ui/button";
import FilterDropdown from "../FilterDropdown";
import { DownloadIcon, FileSpreadsheet, Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddDialog from "../Dialog/AddDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axiosClient from "@/networks/apiClient";

interface Props {
  onApplyFilter: (type: string, value: string) => void;
}

const Toolbar = ({ onApplyFilter }: Props) => {
  const handleDownload = async () => {
    try {
      const response = await axiosClient.get(
        "/personil/export/",
        {
          responseType: "blob", 
        }
      );

      // Create a Blob from the response data
      const pdfBlob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(pdfBlob);

      // Create a temporary <a> element to trigger the download
      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.setAttribute(
        "download",
        `rekap_data.xlsx`
      ); // Set the desired filename for the downloaded file

      // Append the <a> element to the body and click it to trigger the download
      document.body.appendChild(tempLink);
      tempLink.click();

      // Clean up the temporary elements and URL
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading Data:", error);
    }
  }

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
              <Button className="px-8" onClick={handleDownload}>
                <DownloadIcon className="mr-2" /> Unduh
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-primary">
              <DropdownMenuItem onClick={handleDownload} className="bg-primary text-white">
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
