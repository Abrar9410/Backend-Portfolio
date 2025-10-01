import { deleteImageFromCLoudinary } from "../../config/cloudinary.config";
import AppError from "../../errorHelpers/AppError";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { blogSearchableFields } from "./blog.constant";
import { IBlog } from "./blog.interface";
import { Blogs } from "./blog.model";



const createBlog = async (blog: Partial<IBlog>) => {
    const newBlog = await Blogs.create(blog);

    return newBlog;
};

const getBlogs = async (query: Record<string, string>) => {
    const queryBuilder = new QueryBuilder(Blogs.find(), query)
        const blogsData = queryBuilder
            .filter()
            .search(blogSearchableFields)
            .sort()
            .fields()
            .paginate();
    
        const [data, meta] = await Promise.all([
            blogsData.build(),
            queryBuilder.getMeta()
        ])
    
        return {
            data,
            meta
        }
};

const getSingleBlog = async (blogId: string) => {
    const blog = await Blogs.findById(blogId);

    return blog;
};

const updateBlog = async (blogId: string, payload: Partial<IBlog>) => {
    const blog = await Blogs.findById(blogId);

    if (!blog) {
        throw new AppError(404, "Blog Does Not Exist!");
    };

    const updatedBlog = await Blogs.findByIdAndUpdate(blogId, payload, { new: true, runValidators: true });

    if (payload.thumbnail && blog.thumbnail) {
        await deleteImageFromCLoudinary(blog.thumbnail);
    };

    return updatedBlog;
};

const deleteBlog = async (blogId: string) => {
    const blog = await Blogs.findById(blogId);

    if (!blog) {
        throw new AppError(404, "Blog Does Not Exist!");
    };

    const result = await Blogs.findByIdAndDelete(blogId);

    if (blog.thumbnail) {
        await deleteImageFromCLoudinary(blog.thumbnail);
    };

    return result;
};


export const BlogServices = {
    createBlog,
    getBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
};