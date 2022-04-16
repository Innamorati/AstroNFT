import React from "react";
import {
  Counter,
  Count1,
  Count2,
  Count3,
  Count4,
  PrimerP,
  SegundoP,
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
          <PrimerP>NFT Sold</PrimerP>
          <SegundoP>Last Month</SegundoP>
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
          <PrimerP>New User</PrimerP>
          <SegundoP>Last Week</SegundoP>
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
          <PrimerP>New NFT</PrimerP>
          <SegundoP>ON Market</SegundoP>
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
          <PrimerP>Floor Price</PrimerP>
          <SegundoP>Last Month</SegundoP>
        </Count4>
      </Counter>
    </>
  );
};
export default HeroCounter;
