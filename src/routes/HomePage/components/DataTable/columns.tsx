import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type Personil = {
  number: number;
  name: string;
  gender: "L" | "P";
  NRP: number;
  rank: string;
  position: string;
  subSatKer: string;
  subDit: string;
  BKO: string;
  status: "Aktif" | "Non Aktif" | "Cuti" | "Pensiun";
};

export const columns: ColumnDef<Personil>[] = [
  {
    accessorKey: "number",
    header: "No",
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "gender",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "NRP",
    header: "NRP",
  },
  {
    accessorKey: "rank",
    header: "Pangkat",
  },
  {
    accessorKey: "position",
    header: "Jabatan",
  },
  {
    accessorKey: "subSatKer",
    header: "SubSatKer",
  },
  {
    accessorKey: "BKO",
    header: "BKO",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const personil = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(personil.name)}
            >
              Salin Nama
            </DropdownMenuItem>
            <DropdownMenuItem>Ubah Data</DropdownMenuItem>
            <DropdownMenuItem>Hapus Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
