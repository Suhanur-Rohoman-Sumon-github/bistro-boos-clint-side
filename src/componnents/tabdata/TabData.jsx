import React from 'react';
import SingleTabData from './SingleTabData';

const TabData = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                items.map(item =><SingleTabData 
                key={item._id}
                item={item}
                ></SingleTabData> )
            }
        </div>
    );
};

export default TabData;