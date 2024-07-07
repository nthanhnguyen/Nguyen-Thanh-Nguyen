const connectToDatabase = require('../config/database.ts');
import { User } from '../models/user';

// Function to create a new user
export async function createUser(req: any, res: any) {
    const { email, name, age, city } = req.body;

    if (!name) {
        throw res.json({ message: 'Name is required' });
    }

    if (!email) {
        throw res.json({ message: 'Email is required' });
    }

    // Check if the email already exists in the database
    const isExist = await User.findOne({ email: email.toLowerCase() });
    if (isExist) {
        throw res.json({ message: `Email: ${email} already exists in the system, please use another email!` });
    }

    const newUser = new User({
        email: email.toLowerCase(),
        name,
        age,
        city
    });

    await newUser.save();
    return newUser;
}

// Function to get all users
export async function getAllUsers() {
    return User.find();
}

// Function to get a user by their email
export async function getUserByEmail(email: string) {
    return User.findOne({ email: email.toLowerCase() });
}

// Function to update a user's details
export const updateUser = async (req: any, res: any) => {
    const { email, name, age, city } = req.body;

    if (!name) {
        throw res.json({ message: 'Name is required' });
    }

    return User.findOneAndUpdate(
        { email: email.toLowerCase() },
        {
            $set: {
                name,
                age,
                city
            }
        },
        { new: true }
    );
}

// Function to delete a user by their email
export const deleteUserByEmail = async (email: string) => {
    return User.findOneAndDelete({ email: email.toLowerCase() });
}
