import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CardLogin = () => {
  return (
    <Card className="w-[400px] py-5">
      <CardHeader className="flex items-center text-darkBlue">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <Label className="text-darkBlue">Username</Label>
          <Input
            type="text"
            placeholder="Enter your username"
            className="focus-visible:ring-0"
          />
        </div>
        <div className="mt-4">
          <Label className="text-darkBlue">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="focus-visible:ring-0"
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-darkBlue">Sign In</Button>
      </CardFooter>
    </Card>
  );
};

export default CardLogin;
