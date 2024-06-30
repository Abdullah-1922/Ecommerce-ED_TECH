import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { TUser, UserModel } from "../interface/user.interface";
import AppError from "../Error/AppErrors";
import httpStatus from "http-status";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema<TUser, UserModel>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // unique:true,
  },
  mobile: {
    type: String,
    required: true,
    // unique:true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.static("isUserExist", async function (userEmail: string) {
  const user = await User.findOne({ email: userEmail });
  return user;
});
userSchema.static(
  "isPasswordMatched",
  async function (userEmail: string, enteredPassword: string) {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "Wrong password");
    }
    return await bcrypt.compare(enteredPassword, user.password);
  }
);

//Export the model
export const User = mongoose.model<TUser, UserModel>("User", userSchema);
