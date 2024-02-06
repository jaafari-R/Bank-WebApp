import express from "express";

import transactionsRouter from "./routes/transaction.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/transactions", transactionsRouter);

export default app;