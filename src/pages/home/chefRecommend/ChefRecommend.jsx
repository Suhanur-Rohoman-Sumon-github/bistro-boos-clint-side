import React from 'react';
import useFilterData from '../../../hook/useFilterData';
import TextHeader from '../../../componnents/textHeader/TextHeaders';
import SingleChefRecomented from './SingleChefRecomented';

const ChefRecommend = () => {
    const popular = useFilterData('popular')
    return (
        <div>
            <TextHeader header='CHEF RECOMMENDS' subHeader='---Should Try---'></TextHeader>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    popular.map(item => <SingleChefRecomented
                        key={item._id}
                        item={item}
                    ></SingleChefRecomented>)
                }
            </div>
        </div>
    );
};

export default ChefRecommend;