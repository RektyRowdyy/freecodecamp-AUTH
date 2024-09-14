import { useEffect, useState } from "react";
import axios from 'axios';
import { RiComputerLine } from "react-icons/ri";
import { FaTools, FaJs, FaCode, FaChartBar, FaDatabase } from "react-icons/fa";

export default function Courses() {
    
    const [courses, setCourses] = useState([]);
    const iconMap = {
        RiComputerLine,
        FaTools,
        FaJs,
        FaCode,
        FaChartBar,
        FaDatabase
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/getAllCourses")
            .then((res) => {
                if (res.status === 200)
                    setCourses(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);    
    
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-slate-900 mt-5 mb-10">Welcome to freeCodeCamp.org</h1>
                <h1 className="mt-4 text-black font-mono font-normal text-xl">
                    <q>I have not failed. I've just found 10,000 ways <br /> that won't work.</q>
                </h1>
                <span className="italic">— Thomas A. Edison</span>
            </div>
            <div className="mt-10 font-mono">
                {courses.length === 0 ? (
                    <div className="bg-gray-300 p-4 mb-4 text-center text-black font-medium border-2 border-black flex items-center">
                        <h1 className="text-5xl">No Courses Available!</h1>
                    </div>
                ) : (
                    courses.map((course, index) => {
                        const IconComponent = iconMap[course.iconName] || RiComputerLine;
                        return (
                            <div key={index} className="bg-gray-300 p-4 mb-4 text-center text-black font-medium border-2 border-black flex items-center">
                                <IconComponent size={35} className="mr-4" />
                                {course.title} ({course.hours} hours)
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
}