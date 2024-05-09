import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
  placeholder: string;
  label: string;
  type?: string;
}

const DialogInput = ({ control, name, placeholder, label, type }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-4 items-center gap-4">
          <FormLabel>{label}</FormLabel>
          <div className="col-span-3">
            <FormControl>
              <Input placeholder={placeholder} type={type} {...field} />
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default DialogInput;
