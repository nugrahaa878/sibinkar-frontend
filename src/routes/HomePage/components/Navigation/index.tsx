import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import NavigationItem from "./item";
import { useEffect, useState } from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onChangePage: (newPage: number) => void;
}

const Navigation = ({ currentPage, totalPages, onChangePage }: Props) => {
  const [renderPages, setRenderPages] = useState<number[]>([]);

  const onRenderPages = () => {
    let min = currentPage;
    let max = totalPages;

    min = currentPage < 4 ? 1 : currentPage - 3;
    max = totalPages - min > 3 ? min + 3 : totalPages;

    if (currentPage === max && max < totalPages) {
      max++;
      min++;
    }

    const newArr: number[] = [];
    for (let i = min; i <= max; i++) {
      newArr.push(i);
    }
    setRenderPages(newArr);
  };

  useEffect(() => {
    onRenderPages();
  }, [currentPage]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) {
                onChangePage(currentPage - 1);
              }
            }}
          />
        </PaginationItem>
        <PaginationItem>
          {[...renderPages].map((value) => {
            return (
              <NavigationItem
                page={value.toString()}
                isActive={currentPage === value}
                onClick={() => {
                  onChangePage(value);
                }}
                key={value.toString()}
              />
            );
          })}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (currentPage < totalPages) {
                onChangePage(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Navigation;
