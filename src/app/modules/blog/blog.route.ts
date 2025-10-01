import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { multerUpload } from "../../config/multer.config";
import { BlogControllers } from "./blog.controller";
import { validateMutationRequest } from "../../middlewares/validateMutationRequest";
import { createBlogZodSchema, updateBlogZodSchema } from "./blog.validation";


const router = Router();


router.post("/create-blog", checkAuth(), multerUpload.single("file"), validateMutationRequest(createBlogZodSchema), BlogControllers.createBlog);
router.get("/", BlogControllers.getBlogs);
router.get("/:blogId", BlogControllers.getSingleBlog);
router.patch("/update-blog/:blogId", checkAuth(), multerUpload.single("file"), validateMutationRequest(updateBlogZodSchema), BlogControllers.updateBlog);
router.delete("/delete-blog/:blogId", checkAuth(), BlogControllers.deleteBlog);

export const BlogRoutes = router;