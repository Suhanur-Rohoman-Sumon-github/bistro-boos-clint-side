import React from 'react';
import errors from '../../assets/404.gif'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const { error, status } = useRouteError()

    return (
      
      <div className=''>
          <section className='flex items-center h-screen   text-gray-900'>
          
          <div className='container flex flex-col items-center justify-center px-5 mx-auto '>
           
              
            <div className='max-w-md text-center'>
              <h2 className='mb-8 font-extrabold text-9xl text-teal-500'>
              <img src={errors} alt="" />
              </h2>
              <p className='text-2xl text-teal-500 font-semibold md:text-3xl mb-8'>
                {error?.message}
              </p>
              <Link
                to='/'
                className='px-8 py-3 font-semibold rounded bg-teal-500 text-gray-900'
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Error;