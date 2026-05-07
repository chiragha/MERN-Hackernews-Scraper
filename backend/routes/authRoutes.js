import express from "express";

import protect from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} from "../controllers/authController.js";

const router = express.Router();
console.log("Auth Routes Loaded");
// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

//logout
router.post("/logout", protect, logoutUser);

// GET LOGGED IN USER
router.get("/me", protect, getMe);

export default router;