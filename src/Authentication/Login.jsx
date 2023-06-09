import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvaider';


const Login = () => {

    const { signIn } = useContext(AuthContext)
    
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    // console.log(from)

    const handleSignIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='w-25'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button> <br />

                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-muted">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
            </Form>

        </Container >
    );
};

export default Login;