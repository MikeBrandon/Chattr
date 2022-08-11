import { logIn, register } from "../controllers/authController";

const router = require("express").Router();

router.post('/register', register);
router.post('/login', logIn);

export const authRoutes = router;