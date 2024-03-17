import { DialogContent } from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

interface Props {
  message: string;
  onClose: () => void;
}

const ErrorDialog = ({ message, onClose }: Props) => {
  return (
    <DialogContent onCloseAutoFocus={onClose}>
      <div className="flex flex-col items-center">
        <AlertCircle className="h-40 w-40 mb-4 text-red-500" />
        <h1 className="font-bold text-xl text-blue-950">{message}</h1>
      </div>
    </DialogContent>
  );
};

export default ErrorDialog;
