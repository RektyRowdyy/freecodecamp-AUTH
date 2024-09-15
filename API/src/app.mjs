import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import courseRoutes from './routes/courseRoutes.mjs';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import passport from 'passport';
import session from 'express-session';
const app = express();

//global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'iAmBatman',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 60000 * 60 * 24
    }
}));
app.use(cors({
    origin: `${process.env.UI_URL}`,
    credentials: true
}));
app.use(passport.initialize());
app.use(passport.session());

//User Routes
app.use("/api", userRoutes);

//Courses Routes
app.use("/api", courseRoutes);

export { app };