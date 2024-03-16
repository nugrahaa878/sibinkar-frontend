import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  data: string[];
  title: string;
  placeholder: string;
}

const Dropdown = ({ data, title, placeholder }: Props) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4 w-full">
      <Label htmlFor="pangkat">{title}</Label>
      <Select value="">
        <SelectTrigger className="md:w-[464px] sm:w-96">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => {
            return <SelectItem value={item}>{item}</SelectItem>;
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
