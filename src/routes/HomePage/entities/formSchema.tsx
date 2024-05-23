import { z } from "zod";

const personnelFormSchema = z.object({
  name: z
    .string({
      required_error: "Nama wajib diisi",
    })
    .min(3, {
      message: "Nama wajib diisi",
    }),
  gender: z.string({
    required_error: "Jenis kelamin wajib diisi",
  }),
  NRP: z.coerce
    .number({
      required_error: "NRP wajib diisi",
    })
    .gte(10_000_000, "NRP 8 digit")
    .lte(99_999_999, "NRP 8 digit"),
  rank: z.string({
    required_error: "Pangkat wajib diisi",
  }),
  position: z.string({
    required_error: "Posisi wajib diisi",
  }),
  subSatKer: z.string({
    required_error: "SubSatKer wajib diisi",
  }),
  subDit: z.string({
    required_error: "SubDit wajib diisi",
  }),
  BKO: z.string({
    required_error: "BKO wajib diisi",
  }),
  status: z.string({
    required_error: "Status wajib diisi",
  }),
});

export default personnelFormSchema;
