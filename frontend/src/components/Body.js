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
              backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/image1.png"
                }')`,
              backgroundPosition: "center center",
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
              backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/image2.png"
                }')`,
              backgroundPosition: "center center",
            }}
          />
        </BodyConteiner2>
        <BodyConteiner3>
          <a href="https://wa.me/3513154171" target="_blank">
            <IconWP
              style={{
                backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/wsp2.png"
                  }')`,
              }}
            />
          </a>
        </BodyConteiner3>

      </BodyFather>
    </>
  );
}
