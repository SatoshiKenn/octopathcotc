// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Add a type assertion to inform TypeScript about the type of globalThis
const globalWithPrisma: typeof globalThis & { prisma?: PrismaClient } = globalThis;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

// Clean up Prisma Client on server shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default prisma;
