import React from 'react';
import SecondButton from '../../../componnents/button/SecondButton';

const SingleChefRecomented = ({ item }) => {
    const { recipe, price, name, image } = item
    return (
        <div className="card text-white font-bold border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 w-full border border-spacing-10 border-white shadow-white hover:shadow-yellow-500 shadow-2xl  hover:bg-gradient-to-r from-red-500 to-cyan-700 animate-gradient text-white transition duration-300">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-purple-800">Shoes!</h2>
                <p className='text-cyan-400'>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                <button className='bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out'>
                    hi this is me
                   </button>
                </div>
            </div>
        </div>
    );
};

export default SingleChefRecomented;