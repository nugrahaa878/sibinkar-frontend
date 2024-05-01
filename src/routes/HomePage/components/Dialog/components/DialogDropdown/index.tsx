import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import personnelFormSchema from "@/routes/HomePage/entities/formSchema";
import { Control } from "react-hook-form";
import { z } from "zod";

interface Props {
  control?: Control<z.infer<typeof personnelFormSchema>> | undefined;
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
  data: string[];
  label: string;
  defaultValue?: string;
  placeholder: string;
}

const Dropdown = ({
  control,
  name,
  data,
  label,
  defaultValue,
  placeholder,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-4 items-center gap-4">
          <FormLabel>{label}</FormLabel>
          <div className="w-48">
            <Select onValueChange={field.onChange} defaultValue={defaultValue}>
              <SelectTrigger className="md:w-[464px] sm:w-96">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {data.map((item) => {
                  return (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default Dropdown;
