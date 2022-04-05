import React from 'react';
import {BackgroundHero, HeroText, HeroImage, HeroTitle, HeroParagraph, HeroButton, Star1, Star2, Star3, Star4, Astronaut } from '../styles/StyleHero';

const Hero = () => {
    return(
        <BackgroundHero style={{backgroundImage: `url('${process.env.PUBLIC_URL+'/assets/backgroundHero.png'}')`, backgroundSize: 'cover'}}>
            <HeroText>
                <HeroTitle> Lorem ipsum dolor sit amet. </HeroTitle>
                <HeroParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</HeroParagraph>
                <HeroButton>Explore Store!</HeroButton>
            </HeroText>
            <HeroImage>
                <Astronaut><img src={process.env.PUBLIC_URL+'/assets/astronaut.png'}/></Astronaut>
            </HeroImage>
        </BackgroundHero>
    );
}
export default Hero;