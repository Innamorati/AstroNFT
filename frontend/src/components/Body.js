import React from "react";
import {
  Text,
  BodyConteiner,
  BodyConteiner2,
  BodyConteiner3,
  Image,
  BodyFather,
  Paragraph,
  TextConteiner,
  IconWP,
} from "../styles/StyleBody";

export default function Body() {
  return (
    <>
      {/* BODY EN TAMAÑO PC */}
      <BodyFather>
        <BodyConteiner>
          <Image
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/image1.png"
              }')`,
              backgroundPosition: "center center",
            }}
          />
          <TextConteiner>
            <Text>What is a NFT?</Text>
            <Paragraph>
              NFT stands for non-fungible token. It's generally built using the
              same kind of programming as cryptocurrency, like Bitcoin or
              Ethereum, but that's where the similarity ends.The reason is that
              physical money and cryptocurrencies are “fungible,” meaning they
              can be traded or exchanged for one another.
            </Paragraph>
          </TextConteiner>
        </BodyConteiner>
        <BodyConteiner2>
          <TextConteiner>
            <Text>About Us:</Text>
            <Paragraph>
              We are a company who built the biggest marketplace of NFTs in the
              world, in our website you can sell and buy NTFs safely with the
              privacity your need.
            </Paragraph>
          </TextConteiner>
          <Image
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/image2.png"
              }')`,
              backgroundPosition: "center center",
            }}
          />
        </BodyConteiner2>
        <BodyConteiner3>
          <IconWP
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/wsp2.png"
              }')`,
            }}
          />
        </BodyConteiner3>
        {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
      </BodyFather>
    </>
  );
}
