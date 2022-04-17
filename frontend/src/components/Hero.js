import React from "react";
import {
  BackgroundHero,
  HeroText,
  HeroImage,
  HeroTitle,
  HeroParagraph,
  HeroButton,
  Astronaut,
} from "../styles/StyleHero";
import { Link as LinkRouter } from "react-router-dom";

const Hero = () => {
  return (
    <BackgroundHero
      style={{
        backgroundImage: `url('${
          process.env.PUBLIC_URL + "/assets/backgroundHero.png"
        }')`,
        backgroundSize: "cover",
      }}
    >
      <HeroText>
        <HeroTitle> Sell, buy and hold NFTs </HeroTitle>
        <HeroParagraph>
          We are a company whou built the biggest marketplace of NFTs in the
          world. In our website, you can sell and buy NFTs safely with the
          privacity you need.
        </HeroParagraph>
        <LinkRouter to={"/products"}>
          {" "}
          <HeroButton>Explore Store!</HeroButton>{" "}
        </LinkRouter>
      </HeroText>
      <HeroImage>
        <Astronaut>
          <img src={process.env.PUBLIC_URL + "/assets/astronaut.png"} />
        </Astronaut>
      </HeroImage>
    </BackgroundHero>
  );
};
export default Hero;
