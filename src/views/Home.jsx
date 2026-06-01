import React from 'react';
import Hero from '../components/Hero';
import HomeCategories from '../components/home/HomeCategories';
import CorporateAccountability from '../components/home/CorporateAccountability';
import CustomerReviews from '../components/home/CustomerReviews';

import WhyChooseUs from '../components/home/WhyChooseUs';
import Printers from '../components/Printers';
import WhoWeServe from '../components/home/WhoWeServe';
import TrustSection from '../components/home/TrustSection';
import CallToAction from '../components/home/CallToAction';
import HomeContact from '../components/home/HomeContact';

const Home = () => {
    return (
        <div className="home-page">

            <Hero />
            <CorporateAccountability />
            <HomeCategories />
            <WhoWeServe />
            <Printers hideHero={true} />

            <WhyChooseUs />
            <TrustSection />
            <CustomerReviews />
            <CallToAction />
            <HomeContact />
        </div>
    );
};

export default Home;
