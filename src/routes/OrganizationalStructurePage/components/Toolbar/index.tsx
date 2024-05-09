import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DownloadIcon, Plus } from "lucide-react";
import { useState } from "react";

const Toolbar = () => {
  const filters = ["SIKEU", "TAUD"];
  const [filter, setFilter] = useState<string>();

  const handleFilterChange = async (value: string) => {};

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <h1 className="text-xl text-indigo-900 font-bold pb-2">
          Pilih Organisasi
        </h1>
        <Select onValueChange={handleFilterChange} value={filter}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Organisasi" />
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
      </div>

      <div>
        <Button variant="outline" className="mr-6">
          <Plus className="mr-2" /> Tambah Organisasi
        </Button>
        <Button className="px-8">
          <DownloadIcon className="mr-2" /> Unduh
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
