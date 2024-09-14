import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: "*"
}));

//User Routes
app.use("/api", userRoutes);

export { app };