import React, { useContext } from 'react';
import { Authcontext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const navigat = useNavigate()
    const {user,loading } = useContext(Authcontext)
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    else{
        navigat('/login')
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;