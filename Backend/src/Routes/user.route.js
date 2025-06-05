import { Router } from "express";
import { protectRoute } from "../Middlewares/auth.middleware.js";
import { getAllUsers } from "../Controllers/user.controller.js";

const router = Router();

router.get("/", protectRoute, getAllUsers);
//todo : getMessagesRoutes

export default router;
