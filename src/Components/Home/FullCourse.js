import React, { useEffect, useState } from 'react';
import CouserDetails from './CouserDetails';

const FullCourse = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-14 gap-y-6'>
            {
                courses.map(course =><CouserDetails
                key={course.id}
                course={course}
                ></CouserDetails>)
            }
        </div>
    );
};

export default FullCourse;