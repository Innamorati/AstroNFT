import React from "react";
import "../styles/StyleCheckbox.css";
import { Title } from "../styles/StyledProducts";
export default function ErrorProducts() {
  return (
    <div className="noencontrado">
      <Title>Oops! No results for your search.</Title>
      <img
        className="imgErroProduct"
        style={{
          backgroundImage: `url('${
            process.env.PUBLIC_URL + "/assets/errorProducts.png"
          }')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      />
      <Title>Try another please...</Title>
    </div>
  );
}
