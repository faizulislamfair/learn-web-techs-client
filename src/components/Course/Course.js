import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';


const Course = ({ course }) => {
    const { id, name, image } = course;

    return (
        <div className='course'>
            <img src={image} className="card-img-top img-fluid" alt="Course_Image" />
            <div className="card-body">
                <h3 className="card-title">ID: {id}</h3>
                <h3 className="card-title">Name: {name}</h3>
                <Link to={`/course/${id}`}><button className='btn btn-primary'>Explore This Course</button></Link>
            </div>
        </div>
    );
};

export default Course;