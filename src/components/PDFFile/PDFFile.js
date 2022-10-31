import React from 'react';
import Pdf from "react-to-pdf";
import './PDFFile.css';

const ref = React.createRef();


const PDFFile = ({ name, type, image, description }) => {
    return (
        <div className="App">
            <div className="pdf">
                <Pdf targetRef={ref} filename="course_description.pdf">
                    {
                        ({ toPdf }) => <h1> {name}</h1>
                    }
                </Pdf>

                <Pdf targetRef={ref} filename="course_description.pdf">
                    {
                        ({ toPdf }) => <button style={{ borderRadius: '15px' }} onClick={toPdf}> Download PDF</button>
                    }
                </Pdf>

            </div>
            <div ref={ref}>


                <h2 className='mt-3'>This is {type}</h2>
                <img className='mt-2' src={image} alt="Course_Image" /> <br /> <br />
                {description}


            </div>
        </div>
    );
};

export default PDFFile;