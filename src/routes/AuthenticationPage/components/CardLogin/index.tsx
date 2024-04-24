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
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CardLogin = () => {
  const { loginAccount, loginResponse } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginAccount({
      username: username,
      password: password,
    });
  };

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.success) {
        navigate("/");
        return;
      }
    }
  }, [loginResponse, navigate]);

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
