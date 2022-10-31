import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-title'>Welcome to Learn webTechs!</div>

            <div className='home-description-section'>
                <h2 className='mt-5'>What we are?</h2>
                <h3>We provide quality education on website technologies for the betterment of humanity. We give full efforts in making our students learn about website technologies in depth which results in them making amazing fullstack apps!</h3>
            </div>


            <h1 className='mt-5'><u>Our courses are based on</u></h1>

            <div className="row row-cols-1 row-cols-md-2 g-4 banner mt-2">
                <div className="col">
                    <div className="card">
                        <img src="frontend.webp" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="backend.png" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="framework.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="database.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;