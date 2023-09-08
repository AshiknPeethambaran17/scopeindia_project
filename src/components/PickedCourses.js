import React from "react";

const PickedCourses=({courses})=>{
    return(
        <div>
            <h2>Picked Courses</h2>
            {courses.map((course)=>{
                <div key={course.id}>
                    <h3>{course.name}</h3>
                    <p>Duration:{course.duration}</p>
                    <p>Fee:{course.fee}</p>
                </div>
            })}
        </div>
    )
}
export default PickedCourses;