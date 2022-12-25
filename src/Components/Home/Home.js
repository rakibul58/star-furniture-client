import React from 'react';
import Contact from '../Contact/Contact';
import Services from '../services/services';
import Banner from './Banner';
import FAQ from './FAQ';
import Info from './Info';
import Comments from '../Comments/Comments';


const Home = () => {
    return (
        <div>
            <Banner />
            <div>
                <Services />
            </div>
            <div style={{margin: "200px 0"}}>
                <Comments/>
            </div>
            <div>
                <Info />
            </div>
            <div>
                <FAQ />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;