import z from "zod";


export const createUserZodSchema = z.object({
    name: z
        .string({ error: "Name must be string" })
        .min(2, "Name must be at least 2 characters long." )
        .max(50, "Name cannot exceed 50 characters." ),
    email: z
        .email("Invalid email address format."),
    password: z
        .string({ error: "Password must be string" })
        .min(8, "Password must be at least 8 characters long." )
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        })
});


export const updateUserZodSchema = z.object({
    name: z
        .string({ error: "Name must be string" })
        .min(2, "Name must be at least 2 characters long.")
        .max(50, "Name cannot exceed 50 characters.")
        .optional(),
    password: z
        .string({ error: "Password must be string" })
        .min(8, "Password must be at least 8 characters long.")
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        })
        .optional(),
    about: z
        .object()
        .optional()
});