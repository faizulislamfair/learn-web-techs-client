import React from 'react';

const FAQ = () => {
    return (
        <div className='blog mt-5'>
            <h2><u>Frequently Asked Questions (FAQ)</u></h2>
            <div className="accordion mt-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>1. Who are the target audience of this course?</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            This course is for people dreaming to be a complete web developer. It will basically focus on the MERN Stack Web Development but specialize on the frontend library ReactJS and other libraries required to perfect it!


                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>2. What are the prerequisites of this course?</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            We just expect you to keep your cool and be determined while doing the course. To become a good developer you just have to keep going and going. Have patience and try to be as much stable as possible!



                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>3. What are the contents of this course ?</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            Main contents are HTML, CSS, ReactJS, Firebase, NodeJS and Bootstrap. Besides, ExpressJS, NextJS, Redux, React Native, Tailwind CSS, SCSS, MongoDB and many more things will be taught throughout the course!




                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <b>4.  What is the duration of this course?</b>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            It'll take around 6 months to finish this course. You have to have the mentality to invest atleast 6 hours daily to have a proper grasp on the course!

                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <b>5. Why is this course not free?</b>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            There'll be lots of personnels on giving you a great experience while you keep mastering the essentials of this course. They are great developers and will provide you full support throughout your journey. Therefore, this course is not free and comes with a certain amount of payment!

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;