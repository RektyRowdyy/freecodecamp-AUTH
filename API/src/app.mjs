import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import courseRoutes from './routes/courseRoutes.mjs';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import passport from 'passport';
import session from 'express-session';
import { ApiResponse } from './utils/ApiResponse.mjs';
const app = express();

//global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: `${process.env.UI_URL}`,
    credentials: true
}));
app.use(cookieParser());
app.use(session({
    secret: `${process.env.SECRET}`,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60 * 24, //24 hrs
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        domain: `${process.env.API_URL}`
    }
}));
app.use(passport.initialize());
app.use(passport.session());

//base request for testing
app.get("/", (req, res) => {
    res.status(200).json(
        new ApiResponse(200, {}, "Welcome to FreeCodeCamp")
    )
});

//User Routes
app.use("/api", userRoutes);

//Courses Routes
app.use("/api", courseRoutes);

export { app };