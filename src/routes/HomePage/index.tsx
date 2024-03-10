import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Toolbar from "./components/Toolbar";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "./components/Header";
import { DataTable } from "./components/DataTable";
import { Personil, columns } from "./components/DataTable/columns";
import Navigation from "./components/Navigation";

const HomePage = () => {
  const data: Personil[] = [
    {
      number: 1,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "L",
      NRP: 123456789,
      rank: "Sersan",
      position: "Komandan Regu",
      subSatKer: "Kompi A",
      subDit: "Pelopor",
      BKO: "Ops Patroli",
      status: "Aktif",
    },
    {
      number: 2,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "P",
      NRP: 987654321,
      rank: "Kopral",
      position: "Anggota Regu",
      subSatKer: "Kompi B",
      subDit: "Reskrim",
      BKO: "Ops Penyelidikan",
      status: "Non Aktif",
    },
    {
      number: 3,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "L",
      NRP: 456123789,
      rank: "Letnan Satu",
      position: "Pemimpin Regu",
      subSatKer: "Kompi C",
      subDit: "Sabhara",
      BKO: "Ops Pengamanan",
      status: "Cuti",
    },
    {
      number: 4,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "P",
      NRP: 789456123,
      rank: "Kopral",
      position: "Anggota Regu",
      subSatKer: "Kompi A",
      subDit: "Narkoba",
      BKO: "Ops Penangkapan",
      status: "Pensiun",
    },
    // ...
  ];

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar page={NavbarPageEnum.personnelDatabase} />
      <DefaultContainer>
        <Header />
        <Toolbar />
        <DataTable data={data} columns={columns} />
        <Navigation />
      </DefaultContainer>
    </div>
  );
};

export default HomePage;
