import { deleteImageFromCLoudinary } from "../../config/cloudinary.config";
import AppError from "../../errorHelpers/AppError";
import { IUser } from "./user.interface";
import { Users } from "./user.model";
import httpStatus from "http-status-codes";
// import bcryptjs from "bcryptjs";
// import { envVars } from "../../config/env";
// import { QueryBuilder } from "../../utils/QueryBuilder";
// import { userSearchableFields } from "./user.constant";


// const createUserService = async (payload: Partial<IUser>) => {
//     const { email, password, ...rest } = payload;

//     const user = await Users.findOne({email});

//     if (user) {
//         throw new AppError(httpStatus.BAD_REQUEST, "User Already Exists!");
//     };

//     const hashedPassword = await bcryptjs.hash(password as string, Number(envVars.SALT));

//     const newUser = await Users.create({
//         email,
//         password: hashedPassword,
//         ...rest
//     });

//     return newUser;
// };

const updateUserService = async (userId: string, payload: Partial<IUser>) => {

    const user = await Users.findById(userId).select("-password");
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User Not Found!");
    };

    if (payload.password) {
        throw new AppError(httpStatus.NOT_ACCEPTABLE, "Password Can Not be Updated on this Route! If You Want to Change Your Password then Go to 'auth/change-password' Route");
    };

    const updatedUser = await Users.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });

    if (payload.picture && user.picture) {
        await deleteImageFromCLoudinary(user.picture);
    };

    return updatedUser;
};

// const getAllUsersService = async (query: Record<string, string>) => {

//     const queryBuilder = new QueryBuilder(Users.find().select("-password"), query)
//     const usersData = queryBuilder
//         .filter()
//         .search(userSearchableFields)
//         .sort()
//         .fields()
//         .paginate();

//     const [data, meta] = await Promise.all([
//         usersData.build(),
//         queryBuilder.getMeta()
//     ])

//     return {
//         data,
//         meta
//     }
// };

const getMeService = async (userId: string) => {
    const user = await Users.findById(userId);

    return {
        data: user
    };
};


export const UserServices = {
    // createUserService,
    updateUserService,
    // getAllUsersService,
    getMeService
};