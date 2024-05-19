import { Button } from "@/components/ui/button";
import {
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
  acceptLabel?: string; 
  onAccept: () => void;
  onDecline: () => void;
}

const ConfirmationDialog = ({
  title,
  description,
  isLoading,
  acceptLabel,
  onAccept,
  onDecline,
}: Props) => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <DialogDescription className="my-4">{description}</DialogDescription>

      <DialogFooter>
        <Button className="bg-slate-500" onClick={onDecline}>
          Batal
        </Button>

        <Button onClick={onAccept}>
          {isLoading && <Loader2Icon className="mr-2 animate-spin" />}
          {acceptLabel ?? "Simpan"}
        </Button>
      </DialogFooter>
    </div>
  );
};

export default ConfirmationDialog;
