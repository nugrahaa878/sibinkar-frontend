import { Navbar, NavbarPageEnum } from "@/components/Navbar";
import Toolbar from "./components/Toolbar";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "./components/Header";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/DataTable/columns";
import Navigation from "./components/Navigation";
import { Personnel } from "./entity/personnel";

const HomePage = () => {
  const data: Personnel[] = [
    {
      number: 1,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "L",
      NRP: 123456789,
      rank: "Sersan",
      position: "Komandan Regu",
      subSatKer: "Kompi A",
      subDit: "Pelopor",
      BKO: "Gasus Keluar",
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
      BKO: "Gasus Ke Dalam",
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
      BKO: "Gasum Keluar",
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
      BKO: "Gasum Ke Dalam",
      status: "Pensiun",
    },
    {
      number: 5,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "L",
      NRP: 123456789,
      rank: "Sersan",
      position: "Komandan Regu",
      subSatKer: "Kompi A",
      subDit: "Pelopor",
      BKO: "Gasus Keluar",
      status: "Aktif",
    },
    {
      number: 6,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "P",
      NRP: 987654321,
      rank: "Kopral",
      position: "Anggota Regu",
      subSatKer: "Kompi B",
      subDit: "Reskrim",
      BKO: "Gasus Ke Dalam",
      status: "Non Aktif",
    },
    {
      number: 7,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "L",
      NRP: 456123789,
      rank: "Letnan Satu",
      position: "Pemimpin Regu",
      subSatKer: "Kompi C",
      subDit: "Sabhara",
      BKO: "Gasum Keluar",
      status: "Cuti",
    },
    {
      number: 8,
      name: "BAKHARUDDIN MUHAMMAD SYAH, S.H., S.I.K., M.Si.",
      gender: "P",
      NRP: 789456123,
      rank: "Kopral",
      position: "Anggota Regu",
      subSatKer: "Kompi A",
      subDit: "Narkoba",
      BKO: "Gasum Ke Dalam",
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
