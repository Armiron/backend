import express, { Request, Response } from 'express';
import { prisma } from '..';
const router = express.Router();
router.get('/api/investments/list', async (req: Request, res: Response) => {
  const investments = await prisma.investments.findMany();
  console.log(investments);
  await res.status(201).send(investments);
});

export { router as getInvestmentRouter };
