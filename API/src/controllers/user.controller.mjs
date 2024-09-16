import { ApiResponse } from '../utils/ApiResponse.mjs';
import { ApiError } from '../utils/ApiError.mjs';
import { User } from '../models/user.model.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {

    const { name, email, password } = req.body;
    try {
        //see if user exists!
        const findUser = await User.findOne({ email });
        if (findUser)
            return res.status(409).json(
                new ApiResponse(409, {}, `Email id already exists!`)
            );

        //encrypt password
        const encyptedPass = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: encyptedPass });
        await newUser.save();
        return res.status(201).json(
            new ApiResponse(201, {}, `${name} registered successfully!`)
        );
    } catch (error) {
        throw new ApiError(500, "Something went wrong while saving the user");
    }
}

export const loginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        //check if User exists
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(401).json(
                new ApiResponse(401, {}, `User with email: ${email} does not exists!`)
            )
        }

        //compare passwords
        if (!(await bcrypt.compare(password, findUser.password))) {
            return res.status(401).json(
                new ApiResponse(401, {}, "Credentials does not match!")
            )
        }

        //generate JWT token and send it to client cookies
        const token = jwt.sign(
            { id: findUser.id },
            `${process.env.SECRET}`,
            {
                expiresIn: "1d"
            }
        )
        //cookie options
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24hrs
        };
        res.cookie("token", token, options)
        res.status(200).json(
            new ApiResponse(200, {}, `${findUser.name} LoggedIn Successfully!`)
        )

    } catch (error) {
        return res.status(500).json(
            new ApiError(500, "Unable to LogIn User!")
        );
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            expires: new Date(0)
          });
        return res.status(200).json(
            new ApiResponse(200, {}, "User Logged Out!")
        )
    } catch (error) {
        throw new ApiError(500, "Something went wrong while loggin out!");
    }
}

export const generateJWTGoogle = (req, res, next) => {
    try {
        //generate JWT token and send it to client cookies
        const token = jwt.sign(
            { id: req.user.googleId },
            `${process.env.SECRET}`,
            {
                expiresIn: "1d"
            }
        )
        //cookie options
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24hrs
        };
        res.cookie("token", token, options);
        res.status(201).redirect(`${process.env.UI_URL}/courses`);

    } catch (error) {
        return res.status(500).redirect(`${process.env.UI_URL}/signIn`);
    }
}