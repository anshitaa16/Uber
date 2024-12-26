const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.DB_CONNECT,)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.log('Failed to connect to MongoDB', err);
        });
}

module.exports = connectDB;
