import mongoose, { Schema } from "mongoose";

const googleUserSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    } 
});

export const GoogleUser = mongoose.model('GoogleUser', googleUserSchema);