/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { envVars } from "./app/config/env";
import expressSession from "express-session";


const app = express();

app.set("trust proxy", 1);
app.use(cors({
    origin: ['http://localhost:3000', envVars.FRONTEND_URL],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        message: "Portfolio Backend is Running."
    })
});

app.use(globalErrorHandler);

// Not Found Route -- Must be below globalErrorHandler
app.use(notFound);

export default app;