import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

prisma.user.findMany({
    
})