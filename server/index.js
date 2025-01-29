// Step-1
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT=8080;


require("./utils/database").databaseConnection();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

const userRoute = require("./routes/userRoute");
app.use("/api/v1", userRoute);


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
