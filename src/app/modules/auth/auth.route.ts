import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import { checkAuth } from "../../middlewares/checkAuth";


const router = Router();

router.post("/login", AuthControllers.credentialsLogin);
router.post("/refresh-token", AuthControllers.getNewToken);
router.post("/logout", AuthControllers.logout);
router.patch("/change-password", checkAuth(), AuthControllers.changePassword);


export const AuthRoutes = router;