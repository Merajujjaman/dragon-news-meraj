import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRout = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner animation="border" variant="danger" />
    }

    if(user){
        return children;
    }

    return(
        <Navigate state={{from:location}} to='/login'replace ></Navigate>
    )


    return (
        <div>

        </div>
    );
};

export default PrivateRout;