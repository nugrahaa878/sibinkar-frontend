import { ColumnDef } from "@tanstack/react-table";
import Action from "./action";

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
    accessorKey: "subDit",
    header: "SubDit",
  },
  {
    accessorKey: "BKO",
    header: "BKO",
    id: "BKO",
    cell: ({ row }) => {
      const personil = row.original;

      switch (personil.BKO) {
        case "Gasus Keluar":
          return (
            <h1 className="bg-stone-400 border text-white text-xs rounded-md px-2 py-0.5">
              Gasus Keluar
            </h1>
          );
        case "Gasum Keluar":
          return (
            <h1 className="bg-stone-500 border text-white text-xs rounded-md px-2 py-0.5">
              Gasum Keluar
            </h1>
          );
        case "Gasus Ke Dalam":
          return (
            <h1 className="bg-lime-700 border  text-white text-xs rounded-md px-2 py-0.5">
              Gasus Ke Dalam
            </h1>
          );
        case "Gasum Ke Dalam":
          return (
            <h1 className="bg-green-800 border text-white text-xs rounded-md px-2 py-0.5">
              Gasum Ke Dalam
            </h1>
          );
      }
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    id: "status",
    cell: ({ row }) => {
      const personil = row.original;

      switch (personil.status) {
        case "Aktif":
          return (
            <h1 className="bg-green-100 border border-green-700 text-green-700 text-xs rounded-md px-2 py-0.5">
              Aktif
            </h1>
          );
        case "Non Aktif":
          return (
            <h1 className="bg-red-100 border border-red-700 text-red-700 text-xs rounded-md px-2 py-0.5">
              Non Aktif
            </h1>
          );
        case "Cuti":
          return (
            <h1 className="bg-blue-100 border border-blue-700 text-blue-900 text-xs rounded-md px-2 py-0.5">
              Cuti
            </h1>
          );
        case "Pensiun":
          return (
            <h1 className="bg-yellow-100 border border-yellow-700 text-yellow-700 text-xs rounded-md px-2 py-0.5">
              Pensiun
            </h1>
          );
      }

      return <h1 className="text-black">{personil.status}</h1>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const personil = row.original;

      return <Action personil={personil} />;
    },
  },
];
