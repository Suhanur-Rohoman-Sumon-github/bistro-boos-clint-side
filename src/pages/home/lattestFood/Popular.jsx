import React from 'react';
import useFilterData from '../../../hook/useFilterData';
import SinglePopular from './SinglePopular';
import TextHeader from '../../../componnents/textHeader/TextHeaders';
import Button from '../../../componnents/button/Button';

const Popular = () => {
    const popular  = useFilterData('popular')
    return (
        <div>
            <TextHeader header='FROM OUR MENU' subHeader='---Check it out---'></TextHeader>
          <div className='grid md:grid-cols-2 gap-3'>
          {
                popular.map(item=><SinglePopular 
                key={item._id}
                item={item}
                ></SinglePopular>)
            }
          </div>
         <Button title='View Full  Menu'></Button>
        </div>
    );
  
};

export default Popular;