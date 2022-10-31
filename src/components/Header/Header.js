import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthContext } from './../../contexts/UserContext';
import { FaUser } from 'react-icons/fa';
import ReactSwitch from 'react-switch';
import './Header.css';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(curr => curr === "light" ? "dark" : "light");
    }

    console.log(user?.displayName);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#02395D' }} id={theme}>
            <div className="container">

                <Link className="navbar-brand text-white" to="/"> <img src="web_logo.png" style={{ width: '27px', height: '27px', transform: 'translateY(-5px)' }} alt='logo' /> <b style={{ fontSize: '22px' }}>Learn webTechs</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0 p-1">
                        <Link className="nav-link text-white" aria-current="page" to="/"><h5>Home</h5></Link>
                        <Link className="nav-link text-white" to="/courses"><h5>Courses</h5></Link>
                        <Link className="nav-link text-white" to="/faq"><h5>FAQ</h5></Link>
                        <Link className="nav-link text-white" to="/blog"><h5>Blog</h5></Link>
                        <Link className="nav-link" id={theme}>
                            <label className='switch'>{theme === "light" ? "Light Mode " : "Dark Mode "} </label>
                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
                        </Link>
                        {
                            user?.uid ?
                                <Link className="nav-link text-white" onClick={logOut}><h5>Logout</h5></Link>
                                :
                                <>
                                    <Link className="nav-link text-white" to="/login"><h5>Login</h5></Link>
                                    <Link className="nav-link text-white" to='/signup'><h5>Sign Up</h5></Link>

                                </>
                        }
                        <Link className="nav-link text-white">
                            {
                                user?.photoURL ?
                                    <img title={user?.displayName} style={{ height: '35px' }}

                                        className='rounded-circle' src={user.photoURL} alt="user_image" />

                                    : <FaUser></FaUser>
                            }
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;