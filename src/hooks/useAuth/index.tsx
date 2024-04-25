import axiosClient from "@/networks/apiClient";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState<LoginResponseInterface>();

  const [authState, setAuthState] = useState<AuthStateInterface>({
    isAuthenticated: !!Cookies.get("jwt_token"),
  });

  const loginAccount = useCallback(
    async ({ username, password }: LoginDataInterface) => {
      try {
        setLoading(true);

        const loginData = {
          username: username,
          password: password,
        };

        const responseLogin = await axiosClient.post("/auth/login/", loginData);

        if (responseLogin.data.success) {
          const token = responseLogin.data.data.token;
          Cookies.set("jwt_token", token);

          const data_user = jwtDecode(token) as { [key: string]: any };

          console.log("[User Data]", data_user);

          setAuthState({ isAuthenticated: true });
        }

        setLoginResponse(responseLogin.data);
        setLoading(false);
      } catch (err) {
        setLoginResponse({
          success: false,
          message: "Failed Login",
          data: undefined,
        });

        setLoading(false);
      }
    },
    []
  );

  const logoutAccount = useCallback(() => {
    Cookies.remove("jwt_token");

    setAuthState({ isAuthenticated: false });

    navigate("/auth");
  }, [navigate]);

  return {
    isAuthenticated: authState.isAuthenticated,
    loading,
    authState,
    loginAccount,
    logoutAccount,
    loginResponse,
  };
};

export default useAuth;
