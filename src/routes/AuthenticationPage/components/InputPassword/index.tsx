import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputPassword = () => {
  return (
    <div className="mt-4">
      <Label className="text-darkBlue">Password</Label>
      <Input
        type="password"
        placeholder="Enter your password"
        className="focus-visible:ring-0"
      />
    </div>
  );
};

export default InputPassword;
