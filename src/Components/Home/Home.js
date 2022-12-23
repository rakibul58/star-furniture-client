import React from 'react';
import Contact from '../Contact/Contact';
import Services from '../services/services';
import Banner from './Banner';
import FAQ from './FAQ';
import Info from './Info';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Info/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;