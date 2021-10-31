import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Reviewers from '../Reviewers/Reviewers';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Reviewers />
            <FAQ />
        </div>
    );
};

export default Home;