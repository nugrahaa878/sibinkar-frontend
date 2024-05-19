import { z } from "zod";

const formSchema = z.object({
  name: z.string({
    required_error: "Nama tidak boleh kosong",
  }),
  position: z.string({
    required_error: "Posisi tidak boleh kosong",
  }),
  isOffset: z.boolean(),
});

export default formSchema;
