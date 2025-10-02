import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { multerUpload } from "../../config/multer.config";
import { validateMutationRequest } from "../../middlewares/validateMutationRequest";
import { createProjectZodSchema, updateProjectZodSchema } from "./project.validation";
import { ProjectControllers } from "./project.controller";


const router = Router();


router.post("/add-project", checkAuth(), multerUpload.single("file"), validateMutationRequest(createProjectZodSchema), ProjectControllers.addProject);
router.get("/", ProjectControllers.getProjects);
router.get("/:projectId", ProjectControllers.getSingleProject);
router.patch("/update-project/:projectId", checkAuth(), multerUpload.single("file"), validateMutationRequest(updateProjectZodSchema), ProjectControllers.updateProject);
router.delete("/delete-project/:projectId", checkAuth(), ProjectControllers.deleteProject);


export const ProjectRoutes = router;