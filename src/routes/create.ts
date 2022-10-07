import express, { Request, Response } from 'express';
// import { body } from 'express-validator';
import { prisma } from '..';
const router = express.Router();
router.post('/api/investments/create', async (req: Request, res: Response) => {
  const { name, rendAnn, lasting, maxInvDate, amount } = req.body;
  console.log(req.body);
  const investment = await prisma.investments.create({
    data: {
      name,
      amount,
      lasting: new Date(lasting).toISOString(),
      maxInvDate: new Date(maxInvDate).toISOString(),
      rendAnn,
    },
  });
  await res.status(201).send(name);
});

export { router as createInvestmentRouter };
