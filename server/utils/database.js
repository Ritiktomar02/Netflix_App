const mongoose = require("mongoose");


MONGO_URI="mongodb+srv://ritiktomar0209:ZNLID3ezmglIb250@cluster0.hynst.mongodb.net/Netflix_App"


exports.databaseConnection = () => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    });
};
