import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

enum FilterPersonilEnum {
  pangkat = "Pangkat",
  jabatan = "Jabatan",
  subSatKer = "SubSatKer",
  subDit = "SubDit",
}

enum PangkatEnum {
  irjenPol = "IRJEN POL",
  brigjenPol = "BRIGJEN POL",
}

enum JabatanEnum {
  dirkamselKorlantasPolri = "DIRKAMSEL KORLANTAS POLRI",
}

enum SubSatKerEnum {
  kamsel = "KAMSEL",
}

enum SubDitEnum {
  urtuKamsel = "URTU KAMSEL",
}

const FilterDropdown = () => {
  const filters = Object.values(FilterPersonilEnum);

  const [filter, setFilter] = useState<
    FilterPersonilEnum | string | undefined
  >();
  const [subFilters, setSubFilters] = useState<string[] | undefined>();
  const [subFilter, setSubFilter] = useState<string | undefined>();
  const [subFilterPlaceholder, setSubFilterPlaceholder] = useState<string>();

  const onFilterChange = (value: string) => {
    setSubFilter("");
    const selectedFilter =
      FilterPersonilEnum[value as keyof typeof FilterPersonilEnum];
    setFilter(selectedFilter);
    switch (value) {
      case FilterPersonilEnum.jabatan: {
        setSubFilterPlaceholder("Pilih Jabatan");
        setSubFilters(Object.values(JabatanEnum));
        break;
      }
      case FilterPersonilEnum.pangkat: {
        setSubFilterPlaceholder("Pilih Pangkat");
        setSubFilters(Object.values(PangkatEnum));
        break;
      }
      case FilterPersonilEnum.subDit: {
        setSubFilterPlaceholder("Pilih SubDit");
        setSubFilters(Object.values(SubDitEnum));
        break;
      }
      case FilterPersonilEnum.subSatKer: {
        setSubFilterPlaceholder("Pilih SubSatKer");
        setSubFilters(Object.values(SubSatKerEnum));
        break;
      }
    }
  };

  const onSubFilterChange = (value: string) => {
    console.log(value);
    setSubFilter(value);
  };

  const onDeleteFilter = () => {
    setFilter("");
    setSubFilters(undefined);
    setSubFilter("");
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-indigo-900 font-bold pb-2">
        Filter Personil
      </h1>
      <div className="flex">
        <Select value={filter} onValueChange={onFilterChange}>
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
        {subFilters !== undefined && (
          <Select value={subFilter} onValueChange={onSubFilterChange}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder={subFilterPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {subFilters.map((item) => {
                return (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
        {subFilter !== "" && (
          <Button className="ml-2" variant="outline" onClick={onDeleteFilter}>
            Hapus Filter
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
