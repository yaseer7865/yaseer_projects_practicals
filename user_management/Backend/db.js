const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/User_DB")
        .then(() => {
            console.log("connected");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = connectDb;