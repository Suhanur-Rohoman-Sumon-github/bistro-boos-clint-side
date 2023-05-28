import React from 'react';

const SingleData = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <>
             <div className="card card-side bg-base-100 shadow-xl w-9/12 mx-auto  hover:shadow-yellow-500">
            <figure><img style={{ borderRadius: '0px 200px 200px' }} src={image} alt="Movie" /></figure>
            <div className="card-body ">
                <div className='flex justify-between'>
                <h2 className="card-title">{name}</h2>
                <p className='ml-32 text-yellow-500'>${price}</p>
                </div>
                <p >{recipe}</p>
            </div>
        </div>
        </>
    );
};

export default SingleData;