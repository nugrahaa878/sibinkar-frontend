import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const InputPassword = ({ handleChange }: Props) => {
  return (
    <div className="mt-4">
      <Label className="text-darkBlue">Password</Label>
      <Input
        type="password"
        placeholder="Enter your password"
        className="focus-visible:ring-0"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default InputPassword;
