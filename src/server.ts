/* eslint-disable no-console */
import app from "./app";
import dbConnect from "./app/config/dbConnect";
const PORT = process.env.PORT || 4000;
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
});
