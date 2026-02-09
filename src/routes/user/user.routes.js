import express from "express";
import userController from "../../controllers/user/user.controller.js";
import loginController from "../../controllers/user/login.controller.js";
import verifyAccessToken from "../../middleware/verifyTokens/verifyAccessToken.js";

const router = express.Router();

router.post("/signUp", userController.signUp);

router.post(
  "/login",
  loginController.login
);

export default router;
