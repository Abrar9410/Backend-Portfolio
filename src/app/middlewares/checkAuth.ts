import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";
import { verifyToken } from "../utils/jwt";
import { Users } from "../modules/user/user.model";
import httpStatus from "http-status-codes";



export const checkAuth = () => async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.headers.authorization || req.cookies.token;

        if (!token) {
            throw new AppError(401, "Unauthorized Access!")
        };

        const verifiedToken = verifyToken(token, envVars.JWT_SECRET) as JwtPayload;

        const user = await Users.findOne({ email: verifiedToken.email });

        if (!user) {
            throw new AppError(httpStatus.BAD_REQUEST, "User Does Not Exist!");
        };
        
        req.user = verifiedToken;
        
        next();
    } catch (error) {
        next(error)
    }
};