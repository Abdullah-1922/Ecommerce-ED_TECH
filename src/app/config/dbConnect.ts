/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

const dbConnect =async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const connect = await mongoose.connect(process.env.DB_CONNECTION_URL as string);
    console.log("database is connected");
  } catch (err) {
    console.log(err, "data base error");
  }
};
export default dbConnect;
