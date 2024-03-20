import { PaginationLink } from "@/components/ui/pagination";

interface Props {
  page: string;
  isActive: boolean | undefined;
}

const NavigationItem = ({ page, isActive }: Props) => {
  return (
    <PaginationLink
      isActive={isActive}
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
