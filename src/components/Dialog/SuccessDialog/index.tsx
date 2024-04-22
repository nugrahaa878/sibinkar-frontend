import { BadgeCheck } from "lucide-react";

interface Props {
  message: string;
}

const SuccessDialog = ({ message }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <BadgeCheck className="h-40 w-40 mb-4 text-darkBlue" />
      <h1 className="font-bold text-xl text-blue-950">{message}</h1>
    </div>
  );
};

export default SuccessDialog;
