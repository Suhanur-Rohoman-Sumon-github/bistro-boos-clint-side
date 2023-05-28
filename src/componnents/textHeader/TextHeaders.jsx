import React from 'react';

const TextHeader = ({header,subHeader}) => {
    return (
        <div className='text-center my-8'>
            <p className=' text-yellow-500 '>------{subHeader}------</p>
            <hr className='w-4/12  mx-auto my-4' />
            <h1 className='text-4xl text-black font-bold'>{header}</h1>
            <hr className='w-4/12  mx-auto mt-4' />
        </div>
    );
};

export default TextHeader;