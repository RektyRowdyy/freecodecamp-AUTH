import { Router } from "express";
import { getAllCourses } from "../controllers/course.controller.mjs";

const router = Router();

//Get All Courses
router.get('/getAllCourses', getAllCourses)

export default router;