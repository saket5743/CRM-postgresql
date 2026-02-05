import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

// const authRoutes = require("./routes/auth.routes");
// const customerRoutes = require("./routes/customer.routes");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/customers", customerRoutes);


app.get("/", (req, res) => {
  res.send("VERSION 1 FROM DOCKER");
});


app.listen(process.env.PORT, () => {
  console.log(`CRM API running on port ${process.env.PORT}`);
});
