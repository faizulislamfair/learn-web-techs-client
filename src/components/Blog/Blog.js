import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog mt-5'>
            <h2><u>Questions & Answers</u></h2>
            <div className="accordion mt-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>1. What is CORS?</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            The full form of CORS is Cross-Origin Resource Sharing. CORS is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>2. Why are you using Firebase? What other options do you have to implement authentication?</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            The Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.

                            <br /><br />

                            Some other options to implement authentication are:
                            <br />
                            1. Auth0 <br />
                            2. MongoDB <br />
                            3. Passport <br />
                            4. Okta <br />
                            5. JSON Web Token <br />
                            And Many More...
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>3. How does the Private Route work?</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            Private Routes in React Router (also known as Protected Routes) require a user being authorized to visit a route.
                            The private route component is similar to the public route but the difference is that it redirects URL and authenticate condition.

                            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is logged in.
                            Private Routes vary based on the Apps, for example- dashboard, user profile, app settings, home, etc. In simple words, these routes can be accessed only after login.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <b>4. What is Node? How does Node work?</b>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">


                            Node is an open-source, cross-platform, back-end javaScript runtime environment that runs on the V8 JavaScript Engine and executes javaScript code outside a web browser, which was designed to build scalable network applications.

                            <br />
                            <br />
                            Node accepts the request from the clients and sends the response, while working with the request Node handles them with a single thread. To operate i/o operations or requests Node uses the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;