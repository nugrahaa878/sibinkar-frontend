import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputUserName = () => {
  return (
    <div>
      <Label className="text-darkBlue">Username</Label>
      <Input
        type="text"
        placeholder="Enter your username"
        className="focus-visible:ring-0"
      />
    </div>
  );
};

export default InputUserName;
