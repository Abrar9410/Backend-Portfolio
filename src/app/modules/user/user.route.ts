import { Router } from "express";
import { UserControllers } from "./user.controller";
import { /*createUserZodSchema,*/ updateUserZodSchema } from "./user.validation";
import { validateMutationRequest } from "../../middlewares/validateMutationRequest";
import { checkAuth } from "../../middlewares/checkAuth";
// import { multerUpload } from "../../config/multer.config";


const router = Router();

// router.post("/register", multerUpload.single("file"), validateMutationRequest(createUserZodSchema), UserControllers.createUser);
router.get("/me", checkAuth(), UserControllers.getMe);
router.get("/me/about", UserControllers.getAbout);
router.patch("/update-user/:id", checkAuth(), validateMutationRequest(updateUserZodSchema), UserControllers.updateUser);

export const UserRoutes = router;