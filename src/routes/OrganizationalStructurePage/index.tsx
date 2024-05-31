import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import RecursiveOrganizationChart from "./components/RecursiveOrganizationChart";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import useGetListOrganization from "./hooks/useGetListOrganization";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const OrganizationStructurePage = () => {
  const pageRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const { listOrganization, loading } = useGetListOrganization();

  const [organizationId, setOrganzationId] = useState<string>();

  const handleFilterChange = (value: string) => {
    setOrganzationId(value);
  };

  const handleCapture = () => {
    const input = pageRef.current;

    if (input) {
      html2canvas(input, { logging: true, useCORS: true }).then((canvas) => {
        const imgWidth = 208;
        const imgheight = (canvas.height * imgWidth) / canvas.width;

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgheight);
        pdf.save(`${fileName}.pdf`);
      });
    }
  };

  return (
    <div className="flex flex-col items-center h-screen" ref={pageRef}>
      <Navbar page={NavbarPageEnum.organizationalStructure} />
      <div className="py-16 px-16 w-full flex flex-col items-center">
        <Header />
        <Toolbar
          data={listOrganization || []}
          selected={organizationId}
          onFilterChange={handleFilterChange}
          handleCapture={handleCapture}
          setFileName={setFileName}
        />
        <div className="mx-10">
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              {!organizationId && <h1>Tidak ada data</h1>}
              {organizationId !== "" && organizationId !== undefined && (
                <RecursiveOrganizationChart id={organizationId} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructurePage;
