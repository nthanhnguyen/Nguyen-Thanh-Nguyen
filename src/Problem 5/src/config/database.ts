require('dotenv').config();
import mongoose from 'mongoose';

const uri = process.env.MONGO_URL;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Database connection error', err);
});

const connectToDatabase = async () => {
    return mongoose.connection;
};

export default connectToDatabase;

