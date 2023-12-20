import express from "express";
import cors from "cors";
import { passwordRouter } from "./routes/passwords.js";

const app = express();
app.use(cors());
app.use("/passwords", passwordRouter);
app.listen(3000, () => console.log("Server running on port 3000"));
