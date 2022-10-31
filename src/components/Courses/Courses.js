import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './../Course/Course';
import './Courses.css';
import { Col, Container, Row } from 'react-bootstrap';
import CoursesLeftSideBar from './../CoursesLeftSideBar/CoursesLeftSideBar';



const Courses = () => {
    const courses = useLoaderData();

    return (
        <div>
            <Container>
                <Row>

                    <Col lg="3" className='d-lg-block'>
                        <CoursesLeftSideBar></CoursesLeftSideBar>
                    </Col>

                    <Col lg="9">
                        <h2 className="mt-5"><u>Courses</u></h2>

                        <div className="container">
                            <div className="cards">
                                {
                                    courses.map(course => <Course
                                        key={course.id}
                                        course={course}
                                    ></Course>)
                                }
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>


        </div>
    );
};

export default Courses;