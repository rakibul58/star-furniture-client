import React, { useEffect } from 'react';
import Contact from '../Contact/Contact';
import Services from '../services/services';
import Banner from './Banner';
import FAQ from './FAQ';
import Info from './Info';
import Comments from '../Comments/Comments';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <Banner />
            <div data-aos="fade-left">
                <Services />
            </div>
            <div style={{margin: "200px 0"}} data-aos="fade-right">
                <Comments/>
            </div>
            <div data-aos="fade-left">
                <Info />
            </div>
            <div data-aos="fade-right">
                <FAQ />
            </div>
            <div data-aos="fade-left">
                <Contact />
            </div>
        </div>
    );
};

export default Home;