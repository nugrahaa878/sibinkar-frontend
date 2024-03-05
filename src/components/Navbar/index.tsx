import policeYellow from "@/assets/police-1.png";
import policeWhite from "@/assets/police-2.png";
import { Button } from "../ui/button";

enum NavbarPageEnum {
    personnelDatabase,
    staffingStatus,
    organizationalStructure,
}

interface Props {
    page: NavbarPageEnum
}

const Navbar = ({ page }: Props) => {
    return (
    <div className="flex w-full bg-darkBlue items-center px-24 py-4 gap-8">
        <img src={policeYellow} alt="police-1" className="w-14" />
        <img src={policeWhite} alt="police-2" className="w-14" />
        <div className="flex mx-auto">
            <h1 className={`text-white font-semibold text-xl py-1 mx-4 ${page === NavbarPageEnum.personnelDatabase ? 'border-b-4' : ''}`}>Personnel Database</h1>
            <h1 className={`text-white font-semibold text-xl py-1 mx-4 ${page === NavbarPageEnum.staffingStatus ? 'border-b-4' : ''}`}>Staffing Status</h1>
            <h1 className={`text-white font-semibold text-xl py-1 mx-4 ${page === NavbarPageEnum.organizationalStructure ? 'border-b-4' : ''}`}>Organizational Structure</h1>
        </div>
        <Button className="bg-white text-black font-bold">Log Out</Button>
      </div>
    )
}

export {Navbar, NavbarPageEnum}