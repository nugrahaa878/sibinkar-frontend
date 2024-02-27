import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import InputUserName from "../InputUserName";
import InputPassword from "../InputPassword";

const CardLogin = () => {
  return (
    <Card className="w-[400px] py-5">
      <CardHeader className="flex items-center text-darkBlue">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>

      <CardContent>
        <InputUserName />
        <InputPassword />
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-darkBlue">Sign In</Button>
      </CardFooter>
    </Card>
  );
};

export default CardLogin;
