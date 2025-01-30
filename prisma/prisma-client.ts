import { PrismaClient } from "@prisma/client";

const prismaClientSingletone = () => {
    return new PrismaClient();
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingletone>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingletone();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
