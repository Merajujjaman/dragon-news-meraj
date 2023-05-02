import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzoon from './Qzoon';
import RightBg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div >
            <div className='mb-2'>
                <h4>Login with</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>login with google</Button>
                <Button variant="outline-primary"><FaGithub className='me-2'></FaGithub>login with github</Button>
            </div>
            <div>
                <h4>Fiend Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-2'></FaFacebook>facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-2'></FaTwitter>twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='me-2'></FaInstagram>instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzoon></Qzoon>
            <img className='w-100' src={RightBg} alt="background image" />
        </div>
    );
};

export default RightNav;