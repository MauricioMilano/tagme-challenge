import {Schema, Document} from 'mongoose';

export const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, required: true },
    
});
export interface User extends Document{
    id: string;
    name: string;
    password: string;
    active: boolean;
}