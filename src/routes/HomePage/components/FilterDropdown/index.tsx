import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import useGetPangkat from "../../hooks/useGetPangkat";
import { GeneralPersonnelItem } from "../../hooks/types";
import useGetJabatan from "../../hooks/useGetJabatan";
import useGetSubdit from "../../hooks/useGetSubdit";
import useGetSubsatker from "../../hooks/useGetSubsatker";
import { Loader2 } from "lucide-react";

enum FilterPersonilEnum {
  pangkat = "Pangkat",
  jabatan = "Jabatan",
  subSatKer = "SubSatKer",
  subDit = "SubDit",
}

const FilterDropdown = () => {
  const [shouldFetchJabatan, setShouldFetchJabatan] = useState(false);

  const { data, isLoading, mutate } = useGetJabatan({
    shouldFetch: shouldFetchJabatan,
  });
  const filters = Object.values(FilterPersonilEnum);
  const [isGetFilterLoading, setIsGetFilterLoading] = useState<boolean>(false);

  const [filter, setFilter] = useState<
    FilterPersonilEnum | string | undefined
  >();
  const [subFilters, setSubFilters] = useState<
    GeneralPersonnelItem[] | undefined
  >();
  const [subFilter, setSubFilter] = useState<string | undefined>();
  const [subFilterPlaceholder, setSubFilterPlaceholder] = useState<string>();

  const onFilterChange = async (value: string) => {
    setSubFilter("");
    const selectedFilter =
      FilterPersonilEnum[value as keyof typeof FilterPersonilEnum];
    setFilter(selectedFilter);
    switch (value) {
      case FilterPersonilEnum.jabatan: {
        setSubFilterPlaceholder("Pilih Jabatan");
        setIsGetFilterLoading(true);
        setShouldFetchJabatan(true);
        setSubFilters(data);
        setIsGetFilterLoading(false);
        break;
      }
      case FilterPersonilEnum.pangkat: {
        setSubFilterPlaceholder("Pilih Pangkat");
        setIsGetFilterLoading(true);
        const data = await useGetPangkat();
        setSubFilters(data);
        setIsGetFilterLoading(false);
        break;
      }
      case FilterPersonilEnum.subDit: {
        setSubFilterPlaceholder("Pilih SubDit");
        setIsGetFilterLoading(true);
        const data = await useGetSubdit();
        setSubFilters(data);
        setIsGetFilterLoading(false);
        break;
      }
      case FilterPersonilEnum.subSatKer: {
        setSubFilterPlaceholder("Pilih SubSatKer");
        setIsGetFilterLoading(true);
        const data = await useGetSubsatker();
        setSubFilters(data);
        setIsGetFilterLoading(false);
        break;
      }
    }
  };

  const onSubFilterChange = (value: string) => {
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

        {isGetFilterLoading && <Loader2 className="animate-spin mt-2" />}

        {subFilters && !isGetFilterLoading && (
          <Select value={subFilter} onValueChange={onSubFilterChange}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder={subFilterPlaceholder} />
            </SelectTrigger>

            <SelectContent>
              {subFilters.map((item) => {
                return (
                  <SelectItem key={item.id} value={item.nama}>
                    {item.nama}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}

        {subFilter && (
          <Button className="ml-2" variant="outline" onClick={onDeleteFilter}>
            Hapus Filter
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
