import { Router } from "express";
import { Course } from "../models/course.model.mjs";
import { ApiResponse } from "../utils/ApiResponse.mjs";

const router = Router();

router.get('/getAllCourses', async (req, res) => {
    try {
        const books = await Course.find();
        return res.status(200).json(
            new ApiResponse(200, books, "Courses Received!")
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            new ApiResponse(500, {}, "Error Fetching Courses")
        );
    }
})



export default router;