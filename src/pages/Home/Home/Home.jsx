import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Service from './Service/Service';
import Location from './Location/Location';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Location></Location>
        </div>
    );
};

export default Home;