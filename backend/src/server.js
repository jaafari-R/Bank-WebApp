import express from "express";
import cors from "cors";

import transactionsRouter from "./routes/transaction.router.js";
import balanceRouter from "./routes/balance.router.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/transactions", transactionsRouter);
app.use("/balance", balanceRouter);

export default app;