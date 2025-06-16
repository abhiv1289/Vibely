import { Router } from "express";
import { protectRoute, requireAdmin } from "../Middlewares/auth.middleware.js";
import { getStats } from "../Controllers/stat.controller.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getStats);

export default router;
