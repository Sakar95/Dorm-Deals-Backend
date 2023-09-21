import express from "express";
import { signup, login, verifyEmail } from "../controllers/AuthController.js"
import { sellItem } from "../controllers/SellerController.js";

const router = express.Router();

router.post("/api/auth/signup", signup);
router.post("/api/auth/login", login);
router.get("/verify-email", verifyEmail);

router.post("/sell-item",sellItem)

export default router;
