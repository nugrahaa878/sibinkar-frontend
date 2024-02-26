import policeYellow from "@/assets/police-1.png";
import policeWhite from "@/assets/police-2.png";

const Navbar = () => {
  return (
    <div className="flex w-full bg-darkBlue items-center px-24 py-4 gap-8">
      <img src={policeYellow} alt="police-1" className="w-14" />
      <img src={policeWhite} alt="police-2" className="w-14" />
      <h1 className="text-white font-semibold text-2xl">SIBINKAR POLANTAS</h1>
    </div>
  );
};

export default Navbar;
