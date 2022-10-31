import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CoursePremiumDetails.css';


const CoursePremiumDetails = () => {
    const course = useLoaderData();
    const { id, name, type, image, description } = course;


    return (
        <div className='premium-page'>
            <h1 className='mt-5'><u>{name}</u></h1>
            <p className='mt-5'>{description}</p>
        </div>
    );
};

export default CoursePremiumDetails;