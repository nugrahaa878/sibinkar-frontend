import { useNavigate } from "react-router-dom";
import { NavbarPageEnum } from "..";

interface Props {
  type: NavbarPageEnum;
  page: NavbarPageEnum;
}

const NavbarItem = ({ type, page }: Props) => {
  const isSelected = type === page;
  const navigate = useNavigate();

  const onNavigate = () => {
    switch (type) {
      case NavbarPageEnum.personnelDatabase: {
        navigate("/");
        break;
      }
      case NavbarPageEnum.staffingStatus: {
        navigate("/staffing-status");
        break;
      }
      case NavbarPageEnum.organizationalStructure: {
        navigate("/organization-structure");
        break;
      }
    }
  };

  return (
    <button
      className={`text-white font-semibold text-xl py-1 mx-4 ${
        isSelected && "border-b-4"
      }`}
      onClick={onNavigate}
    >
      {type}
    </button>
  );
};

export default NavbarItem;
