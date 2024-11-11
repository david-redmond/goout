'use client'
// app/components/HeroCarousel.tsx
import React from 'react';
import { Box, Link } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages = [
    { src: '/images/buddy-photo-a0GqlDmKnUY-unsplash.jpg', link: '/page1', alt: 'Beautiful Beach', title: 'Discover Beaches' },
    { src: '/images/clem-onojeghuo-H32ky04vW4s-unsplash.jpg', link: '/page2', alt: 'Historic Castle', title: 'Explore Castles' },
    { src: '/images/gabriella-clare-marino-IplbmqSV8KE-unsplash.jpg', link: '/page3', alt: 'Mountain Trail', title: 'Mountain Adventures' },
    { src: '/images/vidar-nordli-mathisen-CJFvuO0kDeM-unsplash.jpg', link: '/page4', alt: 'Mountain Trail', title: 'Mountain Adventures' },

];

const HeroCarousel = () => {
    return (
        <Box>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
                {heroImages.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <img src={item.src} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto', maxHeight: '90vh' }} />
                    </Link>
                ))}
            </Carousel>
        </Box>
    );
};

export default HeroCarousel;
