interface LoginDataInterface {
  username: string;
  password: string;
}

interface AuthStateInterface {
  isAuthenticated: boolean;
}

interface LoginResponseInterface {
  success: boolean;
  message: string;
  data?: {
    token: string;
    refresh_token: string;
  };
}
