import React from "react";
import { TotalCart, Text } from "../styles/StyleCartProducts";

export default function Total(props) {
  console.log(props);
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  return (
    <>
      <TotalCart>
        <Text>Total = {financial(props.price)} USD</Text>
      </TotalCart>
    </>
  );
}
