import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";




const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    tags: { type: [String] },
    views: { type: Number, default: 0 },
}, {
    timestamps: true,
    versionKey: false
});


export const Blogs = model<IBlog>("Blogs", blogSchema);