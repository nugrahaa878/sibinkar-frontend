import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  title: string;
  data: string[];
  value: string;
  onValueChange: (value: string) => void;
}

const Combobox = ({ title, data, value, onValueChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-4 items-center gap-4 w-full">
      <Label>{title}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="md:w-[464px] sm:w-96" asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between rounded-xl border-gray-400 font-normal text-nowrap text-clip"
          >
            {value ? value : "Pilih jabatan"}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="md:w-[464px] sm:w-96 p-0">
          <Command>
            <CommandInput placeholder="Cari jabatan..." />
            <CommandEmpty>Jabatan Tidak Ditemukan</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {data.map((item) => {
                  return (
                    <CommandItem
                      key={item}
                      value={item}
                      onSelect={(currentValue) => {
                        onValueChange(
                          currentValue === value ? "" : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          item === value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item}
                    </CommandItem>
                  );
                })}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Combobox;
