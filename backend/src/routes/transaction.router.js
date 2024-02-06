import { Router } from "express";
import TransactionController from "../controllers/transaction.controller.js";

const router = Router();

router.get("/", TransactionController.getAllTransactions);
router.post("/", TransactionController.createTransaction);
router.delete("/", TransactionController.deleteTransaction);

export default router;