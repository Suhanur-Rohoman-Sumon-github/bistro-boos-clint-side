import React from 'react';

const Button = ({ title }) => {
    return (
        <div className='md:w-3/12 mx-auto mt-11'>
            <button className='btn btn-outline border-0 border-b-4'>{title}</button>
        </div>
    );
};

export default Button;