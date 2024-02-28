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
import { useState } from "react";

const CardLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ username, password });
  };

  return (
    <Card className="w-[400px] py-5">
      <CardHeader className="flex items-center text-darkBlue">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>

      <CardContent>
        <InputUserName handleChange={setUsername} />
        <InputPassword handleChange={setPassword} />
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-darkBlue" onClick={handleLogin}>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardLogin;
