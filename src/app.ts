import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AuthRoute } from "./app/routes/auth.route";
import NotFound from "./app/middlewares/NotFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", AuthRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running || ECommerce");
});

app.use("*", NotFound);
app.use(globalErrorHandler);
export default app;
