import { Router } from "express";
import {
  createSong,
  deleteSong,
  createAlbum,
  deleteAlbum,
  checkAdmin,
} from "../Controllers/admin.controller.js";
import { protectRoute, requireAdmin } from "../Middlewares/auth.middleware.js";

const router = Router();

router.use(protectRoute, requireAdmin);

router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);
router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);
router.get("/check", checkAdmin);
export default router;
