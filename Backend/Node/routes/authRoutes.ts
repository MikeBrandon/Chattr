import { register } from "../controllers/authController";

const router = require("express").Router();

router.post('/register', register);

export const authRoutes = router;