import React from "react";
import { useState,useEffect } from "react";
import CourseDetails from'./CourseDetails';

const SearchCourses=()=>{
    const[courses,setCourses]=useState([]);
    useEffect(()=>{
        const fetchCourse=async()=>{
            try{
                const response = await fetch('/api/courses');
                const data=await response.json();
                setCourses(data);
                }catch(error){
                    console.error('Error fetching courses',error);
                }
            };
            fetchCourse();
        },[]);
        return (
            <div>
                <h2>Search Courses</h2>
                {courses.map((course)=>(
                    <CourseDetails key={course.id} course={course}/>
                ))}
            </div>
        );
        };
export default SearchCourses;