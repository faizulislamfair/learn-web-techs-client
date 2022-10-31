import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const SignUp = () => {

    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        //console.log(name, photoURL, email, password, confirm);


        if (password.length < 6) {
            setError('Password must be atleast 6 characters!')
            return;
        }


        if (password !== confirm) {
            setError('Your Password did not match!');
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }



    return (
        <div className='form-container-signup'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <br />
                <div className="form-control">
                    <label htmlFor="full name">Full Name</label>
                    <input type="text" name="name" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="photoURL">Photo URL</label>
                    <input type="text" name="photoURL" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <br />
            <p style={{ fontSize: '20px' }}>Already have an account? <Link to='/login'>Login</Link></p>
            <h4 className='text-error'>{error}</h4>

        </div>
    );
};

export default SignUp;