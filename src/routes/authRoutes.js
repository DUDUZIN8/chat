import express from "express";
import { loginController } from "../server/controller/authController.js";

const router = express.Router();

router.post("/login", loginController);

export default router;
