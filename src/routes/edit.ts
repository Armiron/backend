import express, { Request, Response } from 'express';
import { prisma } from '..';
const router = express.Router();
router.put(
  '/api/investments/:investmentId/edit',
  async (req: Request, res: Response) => {
    const { investmentId } = req.params;
    const { name, rendAnn, lasting, maxInvDate, amount } = req.body;
    const investment = await prisma.investments.update({
      where: { id: parseInt(investmentId, 10) },
      data: {
        name,
        amount,
        lasting: new Date(lasting).toISOString(),
        maxInvDate: new Date(maxInvDate).toISOString(),
        rendAnn,
      },
    });
    await res.status(201).send(investment);
  }
);

export { router as editInvestmentRouter };
