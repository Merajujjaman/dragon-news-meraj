import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvaider';

const Register = () => {
    // get context api
    const { createUser } = useContext(AuthContext)
    const [accept, setAccept] = useState(false)

    const handleRagister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        // const chackbox = form.chackbox.value;
        console.log(name, email, password, image)

        //new create user:
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleCheckBox = e => {
        setAccept(e.target.checked)
    }

    return (
        <Container className='w-25'>
            <h3>Please Ragister</h3>
            <Form onSubmit={handleRagister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='image' placeholder="image url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheckBox} type="checkbox" name='checkbox' label="Accept terms and condition" required />
                </Form.Group>

                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button>
                <br />

                <Form.Text className="text-success">

                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>

                <Form.Text className="text-muted">
                    Already have an account? <Link to='/login'>login</Link>
                </Form.Text>
            </Form>

        </Container >
    );
};

export default Register;