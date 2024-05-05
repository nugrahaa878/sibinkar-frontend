import { z } from "zod";

const staffingStatusSchema = z.object({
  irjen: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  brigjen: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  kombes: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  akbp: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  kompol: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  akp: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  ip: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  brigta: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  iv: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  iii: z
    .number({
      required_error: "",
    })
    .nonnegative(),
  ii: z
    .number({
      required_error: "",
    })
    .nonnegative(),
});

export default staffingStatusSchema;
