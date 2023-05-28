import React from 'react';
import peraimg from '../../../assets/home/featured.jpg'
import feturedImg from '../../../assets/home/featured.jpg'
import TextHeader from '../../../componnents/textHeader/TextHeaders';

const PeraLex = () => {
    const divStyle = {
        backgroundImage: `url(${peraimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
    };
    return (
        <div className=' h-screen w-full mb-60 bg-cover' style={divStyle}>
         <div className='bg-black  bg-opacity-40 h-screen '>
         <TextHeader header='FROM OUR MENU' subHeader='---Check it out---'></TextHeader>
           <div className='md:flex md:justify-center md:items-center '>
           <div className=''>
                <img className='h-64 w-full' src={feturedImg} alt="" />
            </div>
            <div className='text-white  md:w-1/2 ml-10 '>
                <h1>March 20, 2023</h1>
                <h1>WHERE CAN I GET SOME?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className='btn btn-outline border-0 border-b-4 text-white'>read more</button>
            </div>
           </div>
         </div>
        </div>
    );
};

export default PeraLex;