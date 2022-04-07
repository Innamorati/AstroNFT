import React from "react";
import instagram from "../Assest/instagram.png";
import facebook from "../Assest/facebook.png";
import twitter from "../Assest/twitter.png";
import Favicon from "../Assest/logo.png";
import {
  IconAstroFoot,
  SocialMedia,
  ContactUs,
  AstroNFT,
  Footer,
  IconSocial,
  Paragraph2,
  InAstroNFT,
} from "../styles/StyleFooter";
export default function FooterComp() {
  return (
    <>
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
            }}
          />
        </SocialMedia>
      </Footer>
    </>
  );
}
