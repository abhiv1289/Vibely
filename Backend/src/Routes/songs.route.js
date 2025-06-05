import { Router } from "express";
import { protectRoute, requireAdmin } from "../Middlewares/auth.middleware.js";
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYouSongs,
  getTrendingSongs,
} from "../Controllers/song.controller.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/made-for-you", protectRoute, getMadeForYouSongs);
router.get("/trending", getTrendingSongs);

export default router;
