import React from "react";
import {
  Counter,
  Count1,
  Count2,
  Count3,
  Count4,
  primerP,
  segundoP,
} from "../styles/CounterStyle";
import CountUp from "react-countup";
import '../styles/StyleCheckbox.css'

const HeroCounter = () => {
  return (
    <>
      <Counter>
        <Count1>
          <CountUp
            start={0}
            end={259}
            useEasing={true}
            delay={0.5}
            duration={4}
            suffix="k"
            className="contador"
          />
          <primerP>NFT Sold</primerP>
          <segundoP>Last Month</segundoP>
        </Count1>
        <Count2>
          <CountUp
            start={0}
            end={10}
            useEasing={true}
            delay={0.5}
            duration={4}
            suffix="k"
            className="contador"
          />
          <primerP>New User</primerP>
          <segundoP>Last Week</segundoP>
        </Count2>
        <Count3>
          <CountUp
            start={0}
            end={200}
            useEasing={true}
            delay={0.5}
            duration={4}
            suffix="+"
            className="contador"
          />
          <primerP>New NFT</primerP>
          <segundoP>ON Market</segundoP>
        </Count3>
        <Count4>
          <CountUp
            start={0}
            end={2.76}
            decimals={2}
            useEasing={true}
            delay={0.5}
            duration={4}
            suffix="ETH"
            className="contador"
          />
          <primerP>Floor Price</primerP>
          <segundoP>Last Month</segundoP>
        </Count4>
      </Counter>
    </>
  );
};
export default HeroCounter;
