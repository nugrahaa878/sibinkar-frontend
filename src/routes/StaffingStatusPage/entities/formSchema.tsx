import { z } from "zod";

const staffingStatusSchema = z.object({
  irjen: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  brigjen: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  kombes: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  akbp: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  kompol: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  akp: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  ip: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  brigta: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  iv: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  iii: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
  ii: z.coerce
    .number({
      required_error: "",
    })
    .default(0),
});

export default staffingStatusSchema;
