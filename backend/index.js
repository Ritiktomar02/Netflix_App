
const express = require("express");
require("dotenv").config(); 
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const cors = require("cors");


require("./utils/database.js").databaseConnection();

const app = express();
//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:'https://netflix-app-weld.vercel.app',
    credentials:true
}
app.use(cors(corsOptions));

app.get("/",(req,res)=>{    
    res.send("Welcome to the backend");
});
 
// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
