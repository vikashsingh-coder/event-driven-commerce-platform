import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ],
});

let isConnected = false;

export async function connectPostgres(): Promise<void> {
  if (isConnected) {
    return;
  }

  await prisma.$connect();

  isConnected = true;
}

export async function disconnectPostgres(): Promise<void> {
  if (!isConnected) {
    return;
  }

  await prisma.$disconnect();

  isConnected = false;
}
