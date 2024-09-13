import express, { urlencoded } from 'express';
import passport from 'passport';
import userRoutes from './routes/userRoutes.mjs';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(passport.initialize());

//User Routes
app.use("/api", userRoutes);

export { app };