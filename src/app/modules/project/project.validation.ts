import z from "zod";


export const createProjectZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!"),
    overview: z
        .string("Project Overview must be string!"),
    description: z
        .string("Project Description must be string!"),
    technologies: z
        .array(z.string()),
    challenges: z
        .string("Project Challenges must be string!")
        .optional(),        
    future_plans: z
        .string("Future Plans must be string!")
        .optional(),
    featured: z
        .boolean("Featured property must be a boolean value")
        .optional(),
    github_repo: z
        .string("Project GitHub Repo link must be string!"),
    live_link: z
        .string("Project Live Link must be string!")        
});

export const updateProjectZodSchema = z.object({
    title: z
        .string("Blog Title must be a string!")
        .min(5, "Title is too short!")
        .optional(),
    overview: z
        .string("Project Overview must be string!")
        .optional(),
    description: z
        .string("Project Description must be string!")
        .optional(),
    technologies: z
        .array(z.string())
        .optional(),
    challenges: z
        .string("Project Challenges must be string!")
        .optional(),
    future_plans: z
        .string("Future Plans must be string!")
        .optional(),
    featured: z
        .boolean("Featured property must be a boolean value")
        .optional(),
    github_repo: z
        .string("Project GitHub Repo link must be string!")
        .optional(),
    live_link: z
        .string("Project Live Link must be string!")
        .optional()
});