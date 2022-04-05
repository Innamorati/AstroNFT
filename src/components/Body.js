import React from "react";
import astro from "../../Assest/image1.png";
import astro2 from "../../Assest/image2.jpg";
import iconWP from "../../Assest/wsp2.png";
import instagram from "../../Assest/instagram.png";
import facebook from "../../Assest/facebook.png";
import twitter from "../../Assest/twitter.png";
import Favicon from "../../Assest/logo.png";

import {
  Text,
  BodyConteiner,
  BodyConteiner2,
  BodyConteiner3,
  IconAstroFoot,
  Image,
  BodyFather,
  Paragraph,
  TextConteiner,
  IconWP,
  SocialMedia,
  ContactUs,
  AstroNFT,
  Footer,
  IconSocial,
  Paragraph2,
  InAstroNFT,
} from "../styles/StyleBody";

export default function Body() {
  return (
    <>
      {/* BODY EN TAMAÑO PC */}
      <BodyFather>
        <BodyConteiner>
          <Image
            style={{
              backgroundImage: `url(${astro}) `,
            }}
          />
          <TextConteiner>
            <Text>Lorem ipsum dolor sit amet, consectetur</Text>
            <Paragraph>
              Proin turpis mauris elementum adipiscing leo. At mauris
              pellentesque eget imperdiet. Porttitor aliquet iaculis sed arcu
              diam et, sit. Cras ut proin quis consequat fringilla orci, velit,
              quis. Malesuada tellus facilisi odio lectus blandit morbi risus.
              Quis mattis proin pretium accumsan, scelerisque luctus.nulla.
              Vitae est duis vitae lacus, purus molestie tellus. Feugiat odio
              varius ullamcorper pulvinar sagittis sed vulputate quis. Odio
              urna, id amet quam interdum elementum sed. Senectus sollicitudin
              tortor, mi, a quis
            </Paragraph>
          </TextConteiner>
        </BodyConteiner>
        <BodyConteiner2>
          <TextConteiner>
            <Text>Lorem ipsum dolor sit amet, consectetur</Text>
            <Paragraph>
              Proin turpis mauris elementum adipiscing leo. At mauris
              pellentesque eget imperdiet. Porttitor aliquet iaculis sed arcu
              diam et, sit. Cras ut proin quis consequat fringilla orci, velit,
              quis. Malesuada tellus facilisi odio lectus blandit morbi risus.
              Quis mattis proin pretium accumsan, scelerisque luctus.nulla.
              Vitae est duis vitae lacus, purus molestie tellus. Feugiat odio
              varius ullamcorper pulvinar sagittis sed vulputate quis. Odio
              urna, id amet quam interdum elementum sed. Senectus sollicitudin
              tortor, mi, a quis
            </Paragraph>
          </TextConteiner>
          <Image
            style={{
              backgroundImage: `url(${astro2})`,
            }}
          />
        </BodyConteiner2>
        <BodyConteiner3>
          <IconWP
            style={{
              backgroundImage: `url(${iconWP})`,
            }}
          />
        </BodyConteiner3>
        {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
      </BodyFather>
      <Footer>
        <AstroNFT>
          <InAstroNFT>
            <IconAstroFoot
              style={{
                backgroundImage: `url(${Favicon})`,
                objectFit: "cover",
              }}
            />
            <Paragraph2>AstroNFT</Paragraph2>
          </InAstroNFT>

          <AstroNFT>
            <Paragraph2>© Copyrights. All rights reserved</Paragraph2>{" "}
          </AstroNFT>
        </AstroNFT>
        <ContactUs>
          <Paragraph2>Contact Us</Paragraph2>
          <Paragraph2>
            Contact us if you have any ideas or specific requests at:
            info@astronft.com
          </Paragraph2>
        </ContactUs>
        <SocialMedia>
          <IconSocial
            style={{
              backgroundImage: `url(${instagram})`,
            }}
          />
          <IconSocial
            style={{
              backgroundImage: `url(${facebook})`,
            }}
          />
          <IconSocial
            style={{
              backgroundImage: `url(${twitter})`,
              objectFit: "contain",
            }}
          />
        </SocialMedia>
      </Footer>
    </>
  );
}
