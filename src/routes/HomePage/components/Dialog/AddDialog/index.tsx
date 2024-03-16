import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PersonnelDialog from "../PersonnelDialog";

const AddDialog = () => {
  return (
    <DialogContent className="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>Tambah Personil</DialogTitle>
      </DialogHeader>
      <PersonnelDialog />
      <DialogFooter>
        <Button type="submit">Simpan Data</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddDialog;
