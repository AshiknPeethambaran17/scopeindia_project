import React from "react";


const CourseDetails=({course})=>{
    return(
        <div>
            <h3>{course.name}</h3>
            <p>Duration:{course.duration}</p>
            <p>Fee:{course.fee}</p>
            <button onClick={()=>console.log('signed up for course:',course.name)}>sign up</button>
        </div>
    );
};
export default CourseDetails;