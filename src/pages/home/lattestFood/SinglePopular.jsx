import React from 'react';

const SinglePopular = ({ item }) => {
    const { recipe, price, name, image } = item
    return (
        <div className="card card-side bg-base-100 shadow-xl  hover:shadow-yellow-500">
            <figure><img style={{ borderRadius: '0px 200px 200px' }} src={image} alt="Movie" /></figure>
            <div className="card-body ">
                <div className='flex justify-between'>
                <h2 className="card-title">{name}</h2>
                <p className='ml-32 text-yellow-500'>${price}</p>
                </div>
                <p >{recipe}</p>
            </div>
        </div>
    );
};

export default SinglePopular;