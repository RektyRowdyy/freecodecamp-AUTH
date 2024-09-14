import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        res.clearCookie("token");
        return res.status(400).send("Invalid Token or Expired!");
    }
};

export default jwtAuth;