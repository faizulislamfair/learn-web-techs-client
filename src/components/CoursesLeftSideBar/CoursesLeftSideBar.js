import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesLeftSideBar.css';

const CoursesLeftSideBar = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://learn-web-techs-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    console.log(courses);

    return (
        <div className='mt-5'>
            <h3>All Courses: {courses.length}</h3>
            <div>
                {
                    courses.map(course => <h4
                        key={course.id} className="mb-3">
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </h4>)
                }
            </div>
        </div >
    );
};

export default CoursesLeftSideBar;