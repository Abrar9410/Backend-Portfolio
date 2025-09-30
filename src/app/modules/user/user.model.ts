import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";



const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { type: String },
}, {
    timestamps: true,
    versionKey: false
});


export const Users = model<IUser>("Users", userSchema);