import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  hashedPassword: z.string(),
});

export default schema;
