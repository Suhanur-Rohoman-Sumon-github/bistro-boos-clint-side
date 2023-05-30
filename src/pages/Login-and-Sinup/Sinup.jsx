import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/others/authentication.gif'
import { useForm } from "react-hook-form";
import { Authcontext } from '../../provider/AuthProvider';


const Sinup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { handleSinup } = useContext(Authcontext);
    const onSubmit = data => {
        const { email, name, photo, password } = data
        const emails = email
        const names = name
        const photoUrl = photo
        const passowords = password
        handleSinup(emails, passowords)
            .then(result => {
                console.log(result.user)
            })
            .catch(err => console.error(err))

    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-4xl font-bold text-yellow-500'>creat new account</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <p className='text-red-500'>{"name is required"}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="photo url" className="input input-bordered" />
                                {errors.photo && <p className='text-red-500'>{"photo url is required"}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="enter your email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500'>{"email is requiredd"}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning text-white bg-[#D1A054] border-0">Sinup</button>
                            </div>
                        </form>
                        <div className='flex items-center mx-auto'>
                            <p className='text-center'>Already registered?</p><Link to={'/login'}><button className="btn btn-link text-yellow-500 "> Go to log in</button></Link>
                        </div>
                        <div className="divider">OR sinup with</div>
                        <button className="btn btn-circle btn-outline mx-auto bg-yellow-500 text-white">
                            <FaGoogle />
                        </button>
                    </div>
                    <div className="text-center mr-16 lg:text-left shadow-xl">
                        <img src={img} className='w-full ' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sinup;