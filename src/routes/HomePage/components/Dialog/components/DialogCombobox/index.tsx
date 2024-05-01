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
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import addPersonnelFormSchema from "../../AddDialog/formSchema";
import { z } from "zod";
import { PersonnelAttribute } from "@/routes/HomePage/hooks/types";

interface Props {
  form: UseFormReturn<z.infer<typeof addPersonnelFormSchema>, any, undefined>;
  name:
    | "name"
    | "gender"
    | "NRP"
    | "rank"
    | "position"
    | "subSatKer"
    | "subDit"
    | "BKO"
    | "status";
  label: string;
  data: PersonnelAttribute[];
  placeholder: string;
  searchPlaceholder: string;
  onSelectItem: (value: number) => void;
}

const Combobox = ({
  form,
  name,
  label,
  data,
  placeholder,
  searchPlaceholder,
  onSelectItem,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-4 items-center gap-4 w-full">
          <FormLabel>{label}</FormLabel>

          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger className="md:w-[464px] sm:w-96" asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between rounded-xl border-gray-400 font-normal text-nowrap text-clip"
                  >
                    {field.value ? field.value : placeholder}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent className="md:w-[464px] sm:w-96 p-0">
                <Command>
                  <CommandInput placeholder={searchPlaceholder} />
                  <CommandEmpty>Data Tidak Ditemukan</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {data.map((item) => {
                        return (
                          <CommandItem
                            key={item.id}
                            value={item.nama}
                            onSelect={(currentValue) => {
                              form.setValue(name, currentValue);
                              onSelectItem(item.id);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                item.nama === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {item.nama}
                          </CommandItem>
                        );
                      })}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default Combobox;
