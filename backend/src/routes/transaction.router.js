import { Router } from "express";
import TransactionController from "../controllers/transaction.controller.js";

const router = Router();

router.get("/", TransactionController.getAllTransactions);

export default router;