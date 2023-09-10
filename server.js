import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
export const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

//routers
import jobRouter from "./routes/jobRoutes.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import { validateTest } from "./middleware/validationMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

app.get("/", async (req, res) => {
  res.send("Hello World");
});
app.post("/", async (req, res) => {
  console.log(req);
  res.json({ message: `data received`, data: req.body });
});
app.post("/api/v1/test", validateTest, async (req, res) => {
  const { name } = req.body;
  res.json({ message: `hello ${name}` });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

main().catch((err) => {
  console.log(err);
  process.exit(1);
});

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
  });
}

// const getData = async ()=>{
//     const response = await fetch("https://www.course-api.com/react-useReducer-cart-project")
//     const cartData = await response.json()
//     console.log(cartData);
// }
// getData()

// try{
//     const response = await fetch("https://www.course-api.com/react-useReducer-cart-project")
//     const cartData = await response.json()
//     console.log(cartData);
// }catch(err){
//     console.log(err);
// }

// fetch("https://www.course-api.com/react-useReducer-cart-project")
//   .then((res) =>
//     res.json()
//   ).then((data) => {
//     console.log(data);
//   });

// //Get all jobs
// app.get("/api/v1/jobs")

// //Create job
// app.post("/api/v1/jobs");

// //Get single job
// app.get("/api/v1/jobs/:id");

// //Edit job
// app.patch("/api/v1/jobs/:id");

// //Delete job
// app.delete("/api/v1/jobs/:id");
