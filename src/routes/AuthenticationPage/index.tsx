import FooterCopyright from "@/components/FooterCopyright";
import CardLogin from "./components/CardLogin";
import Navbar from "./components/Navbar";

const AuthenticationPage = () => {
  return (
    <div className="flex flex-col items-center bg-lightBlue h-screen justify-between pb-10">
      <Navbar />
      <CardLogin />
      <FooterCopyright />
    </div>
  );
};

export default AuthenticationPage;
