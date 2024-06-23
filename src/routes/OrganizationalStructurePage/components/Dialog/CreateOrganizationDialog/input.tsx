import formSchema from "./schema";
import { Control } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  control?: Control<z.infer<typeof formSchema>> | undefined;
  name: "chartTitle" | "name";
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
