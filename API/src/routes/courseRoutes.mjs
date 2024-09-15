import { Router } from "express";
import { getAllCourses } from "../controllers/course.controller.mjs";

const router = Router();

router.get('/getAllCourses', getAllCourses)

export default router;