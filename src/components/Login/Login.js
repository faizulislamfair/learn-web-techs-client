import React, { useContext, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const [error, setError] = useState('');


    const { signIn, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();


    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }
            );
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }



    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <br />
            <p style={{ fontSize: '20px' }}>New to Learn webTechs? <Link to='/signup'>Create a New Account</Link></p>
            <h4 className='text-error'>{error}</h4>

            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;