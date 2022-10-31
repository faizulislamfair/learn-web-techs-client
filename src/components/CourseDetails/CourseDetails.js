import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PDFFile from './../PDFFile/PDFFile';


const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, type, image, description } = course;


    return (
        <div>

            <PDFFile name={name} type={type} image={image} description={description}></PDFFile>


            <Link to={`/coursePremium/${id}`} ><button className='btn btn-primary m-4 px-3 py-2'>Get Premium Access</button></Link>
        </div>
    );
};

export default CourseDetails;