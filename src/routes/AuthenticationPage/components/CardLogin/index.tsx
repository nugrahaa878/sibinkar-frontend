"use client";
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
import { useToast } from "@/components/ui/use-toast";
import { ButtonLoading } from "../ButtonLoading";
import { Toaster } from "@/components/ui/toaster";

const CardLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { toast } = useToast();
  const { loginAccount, loginResponse, loading } = useAuth();

  const handleLogin = async () => {
    await loginAccount({
      username: username,
      password: password,
    });
  };

  useEffect(() => {
    if (loginResponse) {
      if (loginResponse.success) {
        navigate("/", {
          state: { afterLogin: true },
        });
        return;
      }

      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "Please check your username and password again",
      });
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
        {loading ? (
          <ButtonLoading />
        ) : (
          <Button className="w-full bg-darkBlue" onClick={handleLogin}>
            Sign In
          </Button>
        )}
      </CardFooter>

      <Toaster />
    </Card>
  );
};

export default CardLogin;
