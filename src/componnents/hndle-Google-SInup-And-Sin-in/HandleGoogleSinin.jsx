import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Authcontext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const HandleGoogleSinin = () => {
    const navigat = useNavigate()
    const {sininWithGoogle} = useContext(Authcontext)
    const handleGoogleSinup = () => {
        
        sininWithGoogle()
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser)
                const users = {
                email: loggedUser.email,
                name: loggedUser.displayName  ,
                role:'user'
                }
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(users)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    navigat('/')
                })
                
            }).catch((error) => {
                console.error(error)
            });
    }
    return (
        <div>
            <button onClick={handleGoogleSinup} className="btn btn-circle btn-outline mx-auto bg-yellow-500 text-white">
                <FaGoogle />
            </button>
        </div>
    );
};

export default HandleGoogleSinin;