import { AlertCircle } from "lucide-react";

interface Props {
  message: string;
}

const ErrorDialog = ({ message }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <AlertCircle className="h-40 w-40 mb-4 text-red-500" />
      <h1 className="font-bold text-xl text-blue-950">{message}</h1>
    </div>
  );
};

export default ErrorDialog;
