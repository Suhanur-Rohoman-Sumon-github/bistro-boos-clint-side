import React from 'react';
import SingleData from '../SingleData';

const MapData = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 gap-2'>
            {
                items.map(item=><SingleData 
                key={item._id}
                item={item}
                ></SingleData>)
            }
        </div>
    );
};

export default MapData;