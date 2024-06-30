import httpStatus from "http-status";
import AppError from "../Error/AppErrors";
import { User } from "../models/user.model";
import catchAsync from "../utils/asyncHandler";
import sendResponse from "../utils/sendResponse";

const createUser = catchAsync(async (req, res) => {
  const email = req.body.email;

  const findUser = await User.isUserExist(email);
  if (findUser) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exist");
  }
  const newUser = await User.create(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "user created Successfully",
    data: newUser,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const email = req.body.email;
  const password = req.body.email;

  const findUser = await User.isUserExist(email);
  if (!findUser) {
    throw new AppError(httpStatus.BAD_REQUEST, "User dose not exist");
  }

  User.isPasswordMatched(email,password)




  const newUser = await User.create(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "user created Successfully",
    data: newUser,
  });
});
export const UserController = {
  createUser,
  loginUser
};
