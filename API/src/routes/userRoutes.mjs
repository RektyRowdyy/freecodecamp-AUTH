import { Router } from "express";
import { User } from "../models/user.model.mjs";

const router = Router();

router.get('/welcome' , (req, res) => {
    req.user ? res.send(req.session) : res.sendStatus(401);
})

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({name, email, password});
    try {
        const saveUser = await newUser.save();
        return res.status(201).send(saveUser);
    } catch (error) {
        console.log(error);
        return res.status(400).send({msg: "Unable to Save User"})
    }
    
})

router.post('/login', async(req, res) => {
    res.sendStatus(200);
})

export default router;