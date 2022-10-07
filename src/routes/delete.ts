import express, { Request, Response } from 'express';
import { prisma } from '..';
const router = express.Router();
router.delete(
  '/api/investments/:investmentId/delete',
  async (req: Request, res: Response) => {
    const { investmentId } = req.params;
    const investment = await prisma.investments.delete({
      where: { id: parseInt(investmentId, 10) },
    });
    await res.status(201).send(investment);
  }
);

export { router as deleteInvestmentRouter };
