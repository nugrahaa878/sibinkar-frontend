import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const InputUserName = ({ handleChange }: Props) => {
  return (
    <div>
      <Label className="text-darkBlue">Username</Label>
      <Input
        type="text"
        placeholder="Enter your username"
        className="focus-visible:ring-0"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default InputUserName;
