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
    <Card className="w-[350px]">
      <CardHeader className="flex items-center">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <Label>Username</Label>
          <Input
            type="text"
            placeholder="Enter your username"
            className="focus-visible:ring-0"
          />
        </div>
        <div className="mt-4">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="focus-visible:ring-0"
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
};

export default CardLogin;
