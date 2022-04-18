import React from "react";
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
                backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/logo.png"
                  }')`,
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

          <a href="https://www.instagram.com/astronft1/" target="_blank">
            <IconSocial
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/instagram.png"
                  }')`,
              }}
            />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100080276206817" target="_blank">
            <IconSocial
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/facebook.png"
                  }')`,
              }}
            />
          </a>

          <a href="https://twitter.com/AstroNFT7" target="_blank">
            <IconSocial
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/twitter.png"
                  }')`,
              }}
            /></a>

        </SocialMedia>
      </Footer>
    </>
  );
}
