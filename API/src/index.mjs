import dotenv from 'dotenv';
import connectDB from './db/index.mjs'
import { app } from './app.mjs';

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    try {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at PORT ${process.env.PORT}`);
        })
    } catch (error) {
        app.on("error", (err) => {
            console.log(`Express failed!!! ${err}`);
            throw err;
        })
    }
})
.catch((err) => {
    console.log(`Mongo connection failed!!`, err);
})

export default app;