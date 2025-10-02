import { Router } from "express"
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/project/project.route";

export const router = Router();

const moduleRoutes = [
    {
        path: "/users",
        route: UserRoutes,
    },
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/blogs",
        route: BlogRoutes,
    },
    {
        path: "/projects",
        route: ProjectRoutes,
    },
];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
});