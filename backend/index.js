//step-1
// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import path from "path";

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();

const __dirname = path.resolve();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'https://netflix-app-tj88.onrender.com',
    credentials:true
}
app.use(cors(corsOptions));
 
// api
app.use("/api/v1/user", userRoute);

app.use(express.static(path.join(__dirname, "/netflix/build")));


app.get("*",(_,res) => {
    res.sendFile(path.resolve(__dirname, "netflix", "build", "index.html"));
})


app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
