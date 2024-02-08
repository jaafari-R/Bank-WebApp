import { Router } from "express";
import BalanceController from "../controllers/balance.controller.js";

const router = Router();

router.get("/", BalanceController.getBalance)

export default router;