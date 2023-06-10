import React from 'react';

const SinglePopular = ({ item }) => {
    const { recipe, price, name, image } = item
    return (
        <div className="card card-side  shadow-2xl  hover:shadow-gray-300 bg-opacity-30 hover:bg-gradient-to-br from-pink-500 to-green-500 animate-gradient text-white  transition duration-300">
            <figure><img style={{ borderRadius: '0px 200px 200px' }} src={image} alt="Movie" /></figure>
            <div className="card-body ">
                <div className='flex justify-between'>
                <h2 className="card-title text-yellow-500">{name}</h2>
                <p className='ml-32 '>${price}</p>
                </div>
                <p className='text-teal-500'>{recipe}</p>
            </div>
            <div>
           
            </div>
        </div>
    );
};

export default SinglePopular;