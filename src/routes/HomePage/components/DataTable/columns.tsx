import { ColumnDef } from "@tanstack/react-table";
import Action from "./action";
import { Personnel } from "../../hooks/useGetPersonnel/types";

export const columns: ColumnDef<Personnel>[] = [
  {
    id: "number",
    header: "No.",
    cell: ({ row }) => {
      return <h1>{row.index + 1}</h1>;
    },
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "pangkat",
    header: "Pangkat",
  },
  {
    accessorKey: "nrp",
    header: "NRP",
  },
  {
    accessorKey: "jabatan",
    header: "Jabatan",
  },
  {
    accessorKey: "jenis_kelamin",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "subsatker",
    header: "SubSatKer",
  },
  {
    accessorKey: "subdit",
    header: "SubDit",
  },
  {
    accessorKey: "bko",
    header: "BKO",
    id: "BKO",
    cell: ({ row }) => {
      const personil = row.original;

      switch (personil.bko) {
        case "Gasus Keluar":
        case "Gasus keluar":
          return (
            <h1 className="bg-stone-400 border text-white text-xs rounded-md px-2 py-0.5">
              Gasus Keluar
            </h1>
          );
        case "Gasum Keluar":
        case "Gasum keluar":
          return (
            <h1 className="bg-stone-500 border text-white text-xs rounded-md px-2 py-0.5">
              Gasum Keluar
            </h1>
          );
        case "Gasus Ke Dalam":
        case "Gasus masuk":
          return (
            <h1 className="bg-lime-700 border  text-white text-xs rounded-md px-2 py-0.5">
              Gasus Masuk
            </h1>
          );
        case "Gasum Ke Dalam":
        case "Gasum masuk":
          return (
            <h1 className="bg-green-800 border text-white text-xs rounded-md px-2 py-0.5">
              Gasum Masuk
            </h1>
          );
        default:
          return (
            <h1 className="bg-slate-800 border text-white text-xs rounded-md px-2 py-0.5">
              -
            </h1>
          )
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

      return <Action personnel={personil} />;
    },
  },
];
