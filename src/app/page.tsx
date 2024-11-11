// app/page.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AttractionCarousel from './components/AttractionsCarousel';
import Footer from './components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <AttractionCarousel title="Popular Attractions" />
            <AttractionCarousel title="Newest Attractions" />
            <Footer />
        </>
    );
};

export default HomePage;
