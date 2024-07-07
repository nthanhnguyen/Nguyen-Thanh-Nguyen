import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    age?: number;
    city?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    city: { type: String }
}, { timestamps: true });

export const User = model<IUser>('User', userSchema);
