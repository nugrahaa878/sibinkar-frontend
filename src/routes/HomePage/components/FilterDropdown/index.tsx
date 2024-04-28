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

enum FilterPersonilEnum {
  pangkat = "Pangkat",
  jabatan = "Jabatan",
  subSatKer = "SubSatKer",
  subDit = "SubDit",
}

const FilterDropdown = () => {
  const filters = Object.values(FilterPersonilEnum);
  const { subFilterData, fetchData, loading } = useGetFilter();
  const [subFilterPlaceholder, setSubFilterPlaceholder] = useState<string>();

  const onFilterChange = async (value: string) => {
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

  const onDeleteFilter = () => {};

  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-indigo-900 font-bold pb-2">
        Filter Personil
      </h1>

      <div className="flex">
        <Select onValueChange={onFilterChange}>
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
            <Select>
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
