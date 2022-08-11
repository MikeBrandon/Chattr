import { logIn, redirect, register, reset } from "../controllers/authController";
import { verifyToken } from "../utils/middleware";

const router = require("express").Router();

router.post('/register', register);
router.post('/login', logIn);

router.get('/reset', reset);
router.get('/redirect', verifyToken, redirect);

export const authRoutes = router;