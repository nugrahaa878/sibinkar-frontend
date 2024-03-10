import policeYellow from "@/assets/police-1.png";
import policeWhite from "@/assets/police-2.png";
import { Button } from "../ui/button";
import NavbarItem from "./NavbarItem";

enum NavbarPageEnum {
  personnelDatabase = "Personnel Database",
  staffingStatus = "Staffing Status",
  organizationalStructure = "Organizational Structure",
}

interface Props {
  page: NavbarPageEnum;
}

const Navbar = ({ page }: Props) => {
  const pages = Object.values(NavbarPageEnum);

  return (
    <div className="flex w-full bg-darkBlue items-center px-24 py-4 gap-8">
      <img src={policeYellow} alt="police-1" className="w-14" />
      <img src={policeWhite} alt="police-2" className="w-14" />
      <div className="flex mx-auto">
        {pages.map((item) => (
          <NavbarItem key={item} page={page} type={item} />
        ))}
      </div>
      <Button className="bg-white text-black font-bold">Log Out</Button>
    </div>
  );
};

export { Navbar, NavbarPageEnum };
