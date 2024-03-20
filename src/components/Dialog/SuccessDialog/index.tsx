import { DialogContent } from "@/components/ui/dialog";
import { BadgeCheck } from "lucide-react";

interface Props {
  message: string;
  onClose: () => void;
}

const SuccessDialog = ({ message, onClose }: Props) => {
  return (
    <DialogContent onCloseAutoFocus={onClose}>
      <div className="flex flex-col items-center">
        <BadgeCheck className="h-40 w-40 mb-4 text-darkBlue" />
        <h1 className="font-bold text-xl text-blue-950">{message}</h1>
      </div>
    </DialogContent>
  );
};

export default SuccessDialog;
