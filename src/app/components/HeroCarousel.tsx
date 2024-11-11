// app/components/Hero.tsx
import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const heroImages = [
    { src: '/images/buddy-photo-a0GqlDmKnUY-unsplash.jpg', link: '/page1', alt: 'Beautiful Beach', title: 'Discover Beaches' },
    { src: '/images/clem-onojeghuo-H32ky04vW4s-unsplash.jpg', link: '/page2', alt: 'Historic Castle', title: 'Explore Castles' },
    { src: '/images/gabriella-clare-marino-IplbmqSV8KE-unsplash.jpg', link: '/page3', alt: 'Mountain Trail', title: 'Mountain Adventures' },
    { src: '/images/vidar-nordli-mathisen-CJFvuO0kDeM-unsplash.jpg', link: '/page4', alt: 'Mountain Trail', title: 'Mountain Adventures' },

];

const Hero = () => {
    return (
        <Box sx={{ width: '100%', mt: 4 }}>
            <Grid container spacing={2}>
                {heroImages.map((image, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Link href={image.link} underline="none" sx={{ display: 'block' }}>
                            <Box
                                component="img"
                                src={image.src}
                                alt={image.alt}
                                sx={{
                                    width: '100%',
                                    height: { xs: '200px', sm: '250px', md: '300px' },
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                align="center"
                                sx={{
                                    mt: 1,
                                    color: 'primary.main',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {image.title}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Hero;
