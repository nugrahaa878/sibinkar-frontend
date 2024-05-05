import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import staffingStatusSchema from "@/routes/StaffingStatusPage/entities/formSchema";
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
    <div className="flex py-2">
      <h1 className="font-bold text-sm text-darkBlue w-full">{title}</h1>
      <h1 className="font-bold text-sm text-darkBlue">DSP</h1>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="border-2 rounded-md w-8 mx-2 text-center"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <h1 className="font-bold text-sm text-darkBlue">RIIL</h1>
      <input
        className="border-2 rounded-md w-8 mx-2 text-center"
        disabled={true}
        value={riil}
      />
    </div>
  );
};

export default DialogInput;
