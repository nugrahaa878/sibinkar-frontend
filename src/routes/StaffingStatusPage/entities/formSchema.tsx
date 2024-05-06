import { z } from "zod";

const staffingStatusSchema = z.object({
  irjen: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  brigjen: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  kombes: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  akbp: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  kompol: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  akp: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  ip: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  brigta: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  iv: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  iii: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
  ii: z.coerce
    .number({
      required_error: "",
    })
    .nonnegative(),
});

export default staffingStatusSchema;
