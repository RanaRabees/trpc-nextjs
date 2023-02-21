import { t } from "../createRouter";
import redisClient from "../utils/connectRedis";
import connectDB from "../utils/prisma";

// Connect to Prisma
connectDB();

export const appRouter = t.router({
  getHello: t.procedure.query(async ({ ctx }) => {
    const message = await redisClient.get("arrey Mera Apna Server Chal Para Doostooo H Ha Ha oh bale Bale");
    return { message };
  }),
});

export type AppRouter = typeof appRouter;
