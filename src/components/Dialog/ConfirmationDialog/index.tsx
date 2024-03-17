import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2Icon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  isLoading: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

const ConfirmationDialog = ({
  title,
  description,
  isLoading,
  onAccept,
  onDecline,
  onClose,
}: Props) => {
  return (
    <DialogContent onCloseAutoFocus={onClose} className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <DialogDescription>{description}</DialogDescription>
      <DialogFooter>
        <Button className="bg-slate-500" onClick={onDecline}>
          Batal
        </Button>
        <Button onClick={onAccept}>
          {isLoading && <Loader2Icon className="mr-2 animate-spin" />}
          Simpan
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ConfirmationDialog;
