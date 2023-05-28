import React from 'react';
import SecondButton from '../button/SecondButton';

const SingleTabData = ({item}) => {
    const { name, recipe, image, price } = item
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                  <SecondButton title='Add To Cart'></SecondButton>
                </div>
                
            </div>
        </div>
    );
};

export default SingleTabData;