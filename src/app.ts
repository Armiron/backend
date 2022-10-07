import express, { Request, Response } from 'express';
import 'express-async-errors';
import 'dotenv/config';
const cors = require('cors');
import { createInvestmentRouter } from './routes/create';
import { getInvestmentRouter } from './routes/list';
import { editInvestmentRouter } from './routes/edit';

const app = express();
app.set('trust proxy', true);

app.use(express.json());
app.use(cors());

app.use(createInvestmentRouter);
app.use(getInvestmentRouter);
app.use(editInvestmentRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new Error();
});

export default app;
