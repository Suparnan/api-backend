const mongoose = require('mongoose');
const config = require('config');

const db = config.get('uri');

// DB Connection
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Server Connected Successfully');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;