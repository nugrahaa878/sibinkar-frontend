import { Button } from "@/components/ui/button";
import { DownloadIcon, FileSpreadsheet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axiosClient from "@/networks/apiClient";

const Toolbar = () => {
  const handleDownload = async () => {
    try {
      const response = await axiosClient.get(
        "/staffing-status/export/",
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
        `rekap_data_staffing_status.xlsx`
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
    <div className="flex w-full justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="px-8">
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
  );
};

export default Toolbar;
