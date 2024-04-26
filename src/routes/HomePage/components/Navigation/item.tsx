import { PaginationLink } from "@/components/ui/pagination";
import { MouseEventHandler } from "react";

interface Props {
  page: string;
  isActive: boolean | undefined;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

const NavigationItem = ({ page, isActive, onClick }: Props) => {
  return (
    <PaginationLink
      isActive={isActive}
      onClick={onClick}
      className={`${
        isActive ? "border-4 border-indigo-400" : "border-2 border-slate-300"
      } mx-1`}
      href="#"
    >
      {page}
    </PaginationLink>
  );
};

export default NavigationItem;
