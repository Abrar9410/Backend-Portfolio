import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
    PORT: string;
    DB_URL: string;
    NODE_ENV: "development" | "production";
    SALT: string;
    JWT_SECRET: string;
    JWT_EXPIRESIN: string;
    REFRESH_JWT_SECRET: string;
    REFRESH_JWT_EXPIRESIN: string;
    EXPRESS_SESSION_SECRET: string;
    FRONTEND_URL: string;
    CLOUDINARY: {
        CLOUDINARY_CLOUD_NAME: string,
        CLOUDINARY_API_SECRET: string,
        CLOUDINARY_API_KEY: string
    };
};

const loadEnvVariables = (): EnvConfig => {

    const requiredEnvVariables: string[] = [
        "PORT",
        "DB_URL",
        "NODE_ENV",
        "SALT",
        "JWT_SECRET",
        "JWT_EXPIRESIN",
        "REFRESH_JWT_SECRET",
        "REFRESH_JWT_EXPIRESIN",
        "EXPRESS_SESSION_SECRET",
        "FRONTEND_URL",
        "CLOUDINARY_CLOUD_NAME",
        "CLOUDINARY_API_SECRET",
        "CLOUDINARY_API_KEY",
    ];

    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`)
        }
    });

    return {
        PORT: process.env.PORT as string,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        DB_URL: process.env.DB_URL!,
        NODE_ENV: process.env.NODE_ENV as "development" | "production",
        SALT: process.env.SALT as string,
        JWT_SECRET: process.env.JWT_SECRET as string,
        JWT_EXPIRESIN: process.env.JWT_EXPIRESIN as string,
        REFRESH_JWT_SECRET: process.env.REFRESH_JWT_SECRET as string,
        REFRESH_JWT_EXPIRESIN: process.env.REFRESH_JWT_EXPIRESIN as string,
        EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET as string,
        FRONTEND_URL: process.env.FRONTEND_URL as string,
        // cloudinary
        CLOUDINARY: {
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string
        }
    };
}

export const envVars = loadEnvVariables();