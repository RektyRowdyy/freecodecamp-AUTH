import jwt from 'jsonwebtoken';
import { ApiResponse } from '../utils/ApiResponse.mjs';

const jwtAuth = (req, res, next) => {
    try {

        const token = req.cookies.token;
        // Check if token exists
        if (!token) {
            return res.status(400).json(
                new ApiResponse(400, {}, "Token does not exist!")
            );
        }
        
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();

    } catch (error) {
        res.clearCookie("token");
        return res.status(400).json(
            new ApiResponse(400, {}, "Invalid or Expired Token!")
        );
    }
};

export default jwtAuth;
