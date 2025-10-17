import z from "zod";


export const createProjectZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!"),
    overview: z
        .string("Project Overview must be string!"),
    detailsJSON: z
        .object({
            type: z.literal("doc", { error: "Invalid or Empty Content!" }),
            content: z.array(z.any()).min(1, "Project Details cannot be empty!")
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
            { message: "Project Details cannot be empty!" }
        )
        .refine((val) => val && val.type === "doc", "Invalid content structure"),
    detailsHTML: z
        .string()
        .min(1, "HTML content cannot be empty!"),
    startDate: z
        .string("Project Start-Date must be string!")
        .min(10, "Invalid Start-Date!"),
    endDate: z
        .string("Project End-Date must be string!")
        .min(7, "Invalid End-Date!")
        .optional(),
    technologies: z
        .array(z.string()),
    featured: z
        .boolean("Featured property must be a boolean value")
        .optional(),
    github_repo: z
        .url("Project GitHub Repo link is not a valid URL!"),
    live_link: z
        .url("Project Live Link is not a valid URL!")
});

export const updateProjectZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!")
        .optional(),
    overview: z
        .string("Project Overview must be string!")
        .optional(),
    detailsJSON: z
        .object({
            type: z.literal("doc", { error: "Invalid or Empty Content!" }),
            content: z.array(z.any()).min(1, "Project Details cannot be empty!")
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
            { message: "Project Details cannot be empty!" }
        )
        .refine((val) => val && val.type === "doc", "Invalid content structure")
        .optional(),
    detailsHTML: z
        .string()
        .min(1, "HTML content cannot be empty!")
        .optional(),
    startDate: z
        .string("Project Start-Date must be string!")
        .min(10, "Invalid Start-Date!")
        .optional(),
    endDate: z
        .string("Project End-Date must be string!")
        .min(7, "Invalid End-Date!")
        .optional(),
    technologies: z
        .array(z.string())
        .optional(),
    featured: z
        .boolean("Featured property must be a boolean value")
        .optional(),
    github_repo: z
        .url("Project GitHub Repo link is not a valid URL!")
        .optional(),
    live_link: z
        .url("Project Live link is not a valid URL!")
        .optional()
});