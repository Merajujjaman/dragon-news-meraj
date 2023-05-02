import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvaider';

const Header = () => {

    

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="logo" />
                <p ><small>Journalism Without Fear or Favor</small></p>
                <p className='text-center'><small>{moment().format("dddd, MMMM D, YYYY")}</small></p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Recent</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text....
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;