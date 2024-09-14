import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    iconName: {
        type: String,
        required: true
    }
});

export const Course = mongoose.model('Course', courseSchema);