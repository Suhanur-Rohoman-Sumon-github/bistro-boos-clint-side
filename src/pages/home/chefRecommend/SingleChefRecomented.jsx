import React from 'react';
import SecondButton from '../../../componnents/button/SecondButton';

const SingleChefRecomented = ({ item }) => {
    const { recipe, price, name, image } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl  hover:shadow-yellow-500">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                    <SecondButton  title='add to card'></SecondButton>
                </div>
            </div>
        </div>
    );
};

export default SingleChefRecomented;