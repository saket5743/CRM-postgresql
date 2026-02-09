import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import configMiddleware from "./middleware/configMiddleware.js";
import myRoutes from './routes/index.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1", configMiddleware, myRoutes);


app.listen(process.env.PORT, () => {
  console.log(`CRM API running on port ${process.env.PORT}`);
});
