import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  hashedPassword: z.string(),
});

export default schema;
