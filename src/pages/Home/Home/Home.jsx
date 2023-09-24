import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home</title>
    
      </Helmet>
           <Banner></Banner>
           <Category />
           <PopulerMenu />
           <Featured />
           <Testimonials />
        </div>
    );
};

export default Home;