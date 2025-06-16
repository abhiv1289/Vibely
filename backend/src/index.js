import express, { json } from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import fs from "fs";

import userRoutes from "./Routes/user.route.js";
import adminRoutes from "./Routes/admin.route.js";
import authRoutes from "./Routes/auth.route.js";
import songsRoutes from "./Routes/songs.route.js";
import albumsRoutes from "./Routes/albums.route.js";
import statsRoutes from "./Routes/stats.route.js";
import { createServer } from "http";
import { initializeSocket } from "./lib/socket.js";
import cron from "node-cron";

dotenv.config();
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT;

const httpServer = createServer(app);
initializeSocket(httpServer);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

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

//cron jobs1

const tempDir = path.join(process.cwd(), "temp");

cron.schedule("0 * * * *", () => {
  if (fstat.existsSync(tempDir)) {
    fstat.readdir(tempDir, (err, files) => {
      if (err) {
        console.log("error", err);
        return;
      }
      for (const file of files) {
        fstat.unlink(path.join(tempDir, file), (err) => {});
      }
    });
  }
});

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/stats", statsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
});

httpServer.listen(PORT, () => {
  console.log("The server is running on port : " + PORT);
  connectDB();
});
