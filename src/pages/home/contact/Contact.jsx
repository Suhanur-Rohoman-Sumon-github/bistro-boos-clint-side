import React from 'react';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
    return (
        <Tilt>
            <div className='bg-red-600 hover:bg-gradient-to-r from-red-500 to-yellow-500 animate-gradient  animate-gradient text-white transition duration-300 my-28 hover:shadow-lg hover:shadow-yellow-500'>
                <h1 className='text-center text-white font-bold py-28 text-4xl px-7'>Call Us: +88 0192345678910 </h1>
            </div>
        </Tilt>
    );
};

export default Contact;