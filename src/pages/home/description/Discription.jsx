import React, { useMemo } from 'react';
import chef from '../../../assets/home/chef-service.jpg'
import Tilt from 'react-parallax-tilt';

const Discription = () => {
    return (
        <div className='relative my-14'>
            <Tilt>
            <img className='w-full h-screen' src={chef} alt="" />
            
            <div className='text-center text-black  bg-white md:p-32 absolute top-[25%]  mx-4   md:left-28'>
                <h1 className='text-4xl font-bold '>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, <br /> nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
            </Tilt>
        </div>
    );
};

export default Discription;