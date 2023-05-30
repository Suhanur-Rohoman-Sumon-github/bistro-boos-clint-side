import React, { useEffect, useState, useContext } from 'react';
import img from '../../assets/others/authentication.gif'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Authcontext } from '../../provider/AuthProvider';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [dasbaled, setDisabled] = useState(true)
    const [error, setError] = useState(null);
    const { handleLogin } = useContext(Authcontext);
    const onSubmit = data => {
        const { email, password } = data
        const emails = email;
        const passowords = password;
        handleLogin(emails,passowords)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
         console.error(err)
            
        })
    };

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleCaptha = (e) => {
        const captha = e.target.value
        if (validateCaptcha(captha)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="hero h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-4xl font-bold text-yellow-500'>user  login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptha} type="text" placeholder="write catcha" className="input input-bordered" />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button disabled={dasbaled} className="btn btn-warning text-white bg-[#D1A054] border-0">Login</button>
                        </div>
                    </form>
                    <div className='flex items-center mx-auto'>
                        <p className='text-center'>New here? </p>  <Link to={'/sinup'}><button className="btn btn-link text-yellow-500 "> Create a New Account</button></Link>
                    </div>
                    <div className="divider">OR sin in with</div>
                    <button className="btn btn-circle btn-outline mx-auto bg-yellow-500 text-white">
                        <FaGoogle />
                    </button>
                </div>
                <div className="text-center mr-16 lg:text-left shadow-xl">
                    <img src={img} className='w-full ' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;