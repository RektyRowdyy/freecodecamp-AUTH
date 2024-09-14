import { Router } from "express";
import { generateJWTGoogle, loginUser, logoutUser, registerUser } from "../controllers/user.controller.mjs";
import passport from "passport";
import '../strategies/google-strategy.mjs'
import jwtAuth from "../middlewares/jwtAuth.middleware.mjs";

const router = Router();

//Register User
router.post('/register', registerUser);

//Login User
router.post('/login', loginUser);

//Logout User
router.get('/logout', logoutUser)

//Google Auth
router.get('/googleAuth', passport.authenticate('google', { scope: ['profile', 'email'] }));

//Google Callback
router.get('/googleCallback', passport.authenticate('google'), generateJWTGoogle);

//Auth
router.get('/auth', jwtAuth);

export default router;