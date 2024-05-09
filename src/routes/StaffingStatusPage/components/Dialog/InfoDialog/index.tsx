import { DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Props {
  title: string;
  message: string;
}
const InfoDialog = ({ title, message }: Props) => {
  return (
    <DialogContent>
      <DialogTitle>{title}</DialogTitle>
      <h1>{message}</h1>
    </DialogContent>
  );
};

export default InfoDialog;
