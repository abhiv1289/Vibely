import express, { json } from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";

import { connectDB } from "./lib/db.js";

import userRoutes from "./Routes/user.route.js";
import adminRoutes from "./Routes/admin.route.js";
import authRoutes from "./Routes/auth.route.js";
import songsRoutes from "./Routes/songs.route.js";
import albumsRoutes from "./Routes/albums.route.js";
import statsRoutes from "./Routes/stats.route.js";

dotenv.config();
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  })
);

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/stats", statsRoutes);

app.use((err, req, res, next) => {
  res
    .status(500)
    .json({
      message:
        process.env.NODE_ENV === "production"
          ? "Internal Server Error"
          : err.message,
    });
});

app.listen(PORT, () => {
  console.log("The server is running on port : " + PORT);
  connectDB();
});
