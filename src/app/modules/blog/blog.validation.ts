import z from "zod";


export const createBlogZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!"),
    overview: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!"),
    contentJSON: z
        .object({
            type: z.literal("doc", {error: "Invalid or Empty Content!"}),
            content: z.array(z.any()).min(1, "Blog Content cannot be empty!")
        })
        .refine(
            (val) => {
                const content = val.content;
                return !(
                    content.length === 1 &&
                    content[0].type === "paragraph" &&
                    (!content[0].content || content[0].content.length === 0)
                );
            },
            { message: "Blog Content cannot be empty!" }
        )
        .refine((val) => val && val.type === "doc", "Invalid content structure"),
    contentHTML: z
        .string()
        .min(1, "HTML content cannot be empty!"),
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
    overview: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!")
        .optional(),
    contentJSON: z
        .object({
            type: z.literal("doc", { error: "Invalid or Empty Content!" }),
            content: z.array(z.any()).min(1, "Blog Content cannot be empty!")
        })
        .refine(
            (val) => {
                const content = val.content;
                return !(
                    content.length === 1 &&
                    content[0].type === "paragraph" &&
                    (!content[0].content || content[0].content.length === 0)
                );
            },
            { message: "Blog Content cannot be empty!" }
        )
        .refine((val) => val && val.type === "doc", "Invalid content structure")
        .optional(),
    contentHTML: z
        .string()
        .min(1, "HTML content cannot be empty!")
        .optional(),
    tags: z
        .array(z.string())
        .optional(),
    views: z
        .number("Views must be a non-negative integer!")
        .min(0, "Views can not be negative!")
        .optional()
});