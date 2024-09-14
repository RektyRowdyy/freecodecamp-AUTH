import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.mjs";

const router = Router();

//Register User
router.post('/register', registerUser);

//Login User
router.post('/login', loginUser);



export default router;