const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

require("./utils/database").databaseConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

// Define a route for the root path
app.get("/", (req, res) => {
    res.send("Welcome to the Netflix App API!");
});

const userRoute = require("./routes/userRoute");
app.use("/api/v1", userRoute);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
