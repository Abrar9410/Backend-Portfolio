import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";




const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true, unique: true, trim: true },
    overview: { type: String, required: true, trim: true },
    thumbnail: { type: String, required: true, unique: true },
    contentJSON: { type: Object, required: true },
    contentHTML: { type: String, required: true },
    tags: { type: [String], required: true },
    views: { type: Number, default: 0 },
}, {
    timestamps: true,
    versionKey: false
});


export const Blogs = model<IBlog>("Blogs", blogSchema);