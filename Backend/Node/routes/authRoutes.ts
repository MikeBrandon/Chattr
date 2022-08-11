import { logIn, redirect, register, reset, verifyRoute } from "../controllers/authController";
import { verifyJWTToken, verifyResetToken } from "../utils/middleware";

const router = require("express").Router();

router.post('/register', register);
router.post('/login', logIn);

router.get('/reset', reset);
router.get('/redirect', verifyResetToken, redirect);

router.get('/verify', verifyJWTToken, verifyRoute);

export const authRoutes = router;