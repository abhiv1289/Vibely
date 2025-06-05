import { Router } from "express";
import { authCallback } from "../Controllers/auth.controller.js";

const router = Router();

router.post("/callback", authCallback);

export default router;
