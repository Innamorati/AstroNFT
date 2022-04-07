import React from 'react';
import Hero from '../components/Hero';
import Body from '../components/Body';
import HeroCounter from '../components/Counter';

const Home = () => {
    return (
        <>
            <Hero />
            <HeroCounter />
            <Body />
        </>
    );
}

export default Home;
