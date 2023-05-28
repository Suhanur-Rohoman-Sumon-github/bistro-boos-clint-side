import React from 'react';
import Banner from '../banner/Banner';
import Discription from '../description/Discription';
import OurProducts from '../ourProducts/OurProducts';
import Contact from '../contact/Contact';
import ChefRecommend from '../chefRecommend/ChefRecommend';
import PeraLex from '../peralexImg/PeraLex';
import Testiomonial from '../testimonial/Testiomonial';
import useTitle from '../../../hook/useTitle';
import Popular from '../lattestFood/Popular';

const Home = () => {
    useTitle('bistro boos | home')
    return (
        <div>
            {/* banner start */}
            <Banner />
            {/* banner end */}

            {/* our products start */}
            <OurProducts />
            {/* our products end */}

            {/* description start */}
            <Discription />
            {/* discription end */}

            {/* lattest food start */}
            <Popular />
            {/* lattest fodo end */}

            {/* constact start */}
            <Contact />
            {/* constact end */}

            {/* chef recomended start  */}
            <ChefRecommend />
            {/* chef reconded end */}

            {/* peralex start */}
            <PeraLex />
            {/* peralex end */}

            {/* testimonial start */}
            <Testiomonial />
            {/* testimonial end */}

            

        </div>
    );
};

export default Home;