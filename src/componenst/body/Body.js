import React from "react";
import astro from "../../Assest/image1.png";
import astro2 from "../../Assest/image2.jpg";
import iconWP from "../../Assest/whatsapp.png";
import {
  Text,
  BodyConteiner,
  Image,
  BodyFather,
  Paragraph,
  TextConteiner,
  IconWP,
  conteinerWP,
  BodyConteinerTab,
} from "../../styles/StyleBody";

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
        <BodyConteiner>
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
        </BodyConteiner>
        {/* BODY EN PANTALLA DE TAB */}
        <BodyConteinerTab>
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
        </BodyConteinerTab>
        <BodyConteinerTab>
          <Image
            style={{
              backgroundImage: `url(${astro2})`,
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
        </BodyConteinerTab>
        <conteinerWP>
          <IconWP
            style={{
              backgroundImage: `url(${iconWP})`,
            }}
          />
        </conteinerWP>
      </BodyFather>
    </>
  );
}
