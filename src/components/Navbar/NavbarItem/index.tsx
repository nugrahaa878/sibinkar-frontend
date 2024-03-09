import { NavbarPageEnum } from ".."

interface Props {
    type: NavbarPageEnum,
    page: NavbarPageEnum,
}

const NavbarItem = ({type, page} : Props) => {
    const isSelected = type === page;

    return (
        <button className={`text-white font-semibold text-xl py-1 mx-4 ${isSelected && 'border-b-4'}`}>{type}</button>
    )
}

export default NavbarItem