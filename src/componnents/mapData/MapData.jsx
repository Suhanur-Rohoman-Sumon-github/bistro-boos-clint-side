import React from 'react';
import SingleData from '../SingleData';
import Button from '../button/Button';

const MapData = ({items}) => {
    return (
        <>
        <div className='grid md:grid-cols-2 gap-2'>
            {
                items.map(item=><SingleData 
                key={item._id}
                item={item}
                ></SingleData>)
            }
        </div>
        
        </>
    );
};

export default MapData;