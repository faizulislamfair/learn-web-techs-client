import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="container-fluid text-white text-center mt-5 py-5" style={{ backgroundColor: '#02395D' }}>

            <h3>Learn webTechs</h3>

            <p>Rajshahi, Bangladesh</p>

            <p>Privacy Policy | Terms of use</p>

            <div className="social-icons">
                <FaFacebook />
                <FaGithub />
                <FaPinterest />
                <FaInstagram />
                <FaLinkedin />
            </div>


        </footer>
    );
};

export default Footer;