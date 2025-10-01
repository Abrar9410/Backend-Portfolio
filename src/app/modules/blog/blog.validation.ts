import z from "zod";


export const createBlogZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!"),
    content: z
        .string("Blog COntent must be string!"),
    tags: z
        .array(z.string()),
    views: z
        .number("Views must be a non-negative integer!")
        .min(0, "Views can not be negative!")
        .optional()        
});

export const updateBlogZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!")
        .optional(),
    content: z
        .string("Blog COntent must be string!")
        .optional(),
    tags: z
        .array(z.string())
        .optional(),
    views: z
        .number("Views must be a non-negative integer!")
        .min(0, "Views can not be negative!")
        .optional()
});