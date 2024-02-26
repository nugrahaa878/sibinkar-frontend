import CardLogin from "./components/CardLogin";
import Navbar from "./components/Navbar";

const AuthenticationPage = () => {
  return (
    <div className="flex flex-col items-center bg-lightBlue">
      <Navbar />
      <CardLogin />
    </div>
  );
};

export default AuthenticationPage;
