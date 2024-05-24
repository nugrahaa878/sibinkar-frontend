import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import staffingStatusSchema from "@/routes/StaffingStatusPage/types/formSchema";
import { Control } from "react-hook-form";
import { z } from "zod";

interface Props {
  title: string;
  riil: number;
  control?: Control<z.infer<typeof staffingStatusSchema>> | undefined;
  name:
    | "akbp"
    | "akp"
    | "ip"
    | "iv"
    | "iii"
    | "ii"
    | "irjen"
    | "brigjen"
    | "kombes"
    | "kombes"
    | "kompol"
    | "brigta";
}

const DialogInput = ({ riil, title, control, name }: Props) => {
  return (
    <div className="flex py-2 items-center">
      <h1 className="font-bold text-sm text-darkBlue w-full">{title}</h1>
      <h1 className="font-bold text-sm text-darkBlue">DSP</h1>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="border-2 rounded-md mx-2 w-12 p-0 text-center [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <h1 className="font-bold text-sm text-darkBlue">RIIL</h1>
      <Input
        className="border-2 rounded-md w-10 mx-2 text-center bg-neutral-200"
        disabled={true}
        value={riil}
      />
    </div>
  );
};

export default DialogInput;
