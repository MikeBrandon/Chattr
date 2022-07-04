const mongoose = require('mongoose');

export const connectDB = (url: string | undefined) => {
    if (!url) {
        return console.log("MongoDB: No URL Provided");
    }
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB: Connected Successfully")
    }).catch(() => {
        console.log("MongoDB: Connection Failed");
    });
}