import { Router } from "express";
import authController from "../controllers/auth.controller";

const router: Router = Router();

router.get('/signIn', authController.signIn);
router.get('/signUp', authController.signUp);

export default router;