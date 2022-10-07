import app from './app';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const start = async () => {
  console.log('Starting backend...');
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL not specified');
  }
  try {
    await prisma.$connect();
    console.log('connected to postgreSQL');
  } catch (err) {
    console.log(err);
  }

  app.listen(3001, () => {
    console.log('Listening on port 3001');
  });
};

start();

export { prisma };
