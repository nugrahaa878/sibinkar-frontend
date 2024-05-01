import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import useGetFilter from "../../hooks/useGetSubFilter";
import FilterPersonilEnum from "./enums";

interface Props {
  onApplyFilter: (type: string, value: string) => void;
}

const FilterDropdown = ({ onApplyFilter }: Props) => {
  const filters = Object.values(FilterPersonilEnum);
  const { subFilterData, fetchData, loading } = useGetFilter();
  const [subFilterPlaceholder, setSubFilterPlaceholder] = useState<string>();
  const [filter, setFilter] = useState<string>();

  const onFilterChange = async (value: string) => {
    setFilter(value);
    onApplyFilter("", "");
    switch (value) {
      case FilterPersonilEnum.jabatan: {
        setSubFilterPlaceholder("Pilih Jabatan");
        fetchData("jabatan");
        break;
      }
      case FilterPersonilEnum.pangkat: {
        setSubFilterPlaceholder("Pilih Pangkat");
        fetchData("pangkat");
        break;
      }
      case FilterPersonilEnum.subDit: {
        setSubFilterPlaceholder("Pilih SubDit");
        fetchData("subdit");
        break;
      }
      case FilterPersonilEnum.subSatKer: {
        setSubFilterPlaceholder("Pilih SubSatKer");
        fetchData("subsatker");
        break;
      }
    }
  };

  const onDeleteFilter = () => {
    setFilter("");
    setSubFilterPlaceholder("");
    fetchData("delete");
    onApplyFilter("", "");
  };

  const onFilter = (value: string) => {
    onApplyFilter(filter || "", value);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-indigo-900 font-bold pb-2">
        Filter Personil
      </h1>

      <div className="flex">
        <Select onValueChange={onFilterChange} value={filter}>
          <SelectTrigger className="w-[250px] mr-4">
            <SelectValue placeholder="Filter Berdasarkan" />
          </SelectTrigger>

          <SelectContent>
            {filters.map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        {subFilterData.length > 0 && !loading && (
          <>
            <Select onValueChange={onFilter}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder={subFilterPlaceholder} />
              </SelectTrigger>

              <SelectContent>
                {subFilterData.map((item) => {
                  return (
                    <SelectItem key={item.id} value={item.nama}>
                      {item.nama}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>

            <Button className="ml-2" variant="outline" onClick={onDeleteFilter}>
              Hapus Filter
            </Button>
          </>
        )}

        {loading && <Loader2 className="animate-spin mt-2" />}
      </div>
    </div>
  );
};

export default FilterDropdown;
