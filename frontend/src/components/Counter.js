import React from "react";
import { Counter, Count1, Count2, Count3, Count4 } from "../styles/CounterStyle"
import CountUp from "react-countup";

const HeroCounter = () => {
    return (
        <>
            <Counter>
                <Count1>
                <CountUp start={0} end={259} useEasing={true} delay={0.5} duration={4} suffix='k' style={{fontSize: '32px', fontFamily: 'ubuntu', fontWeight: '800'}}/>
                    <p>NFT Sold</p>
                    <p>Last Month</p>
                </Count1>
                <Count2>
                <CountUp start={0} end={10} useEasing={true} delay={0.5} duration={4} suffix='k' style={{fontSize: '32px', fontFamily: 'ubuntu', fontWeight: '800'}}/>
                    <p>New User</p>
                    <p>Last Week</p>
                </Count2>
                <Count3>
                <CountUp start={0} end={200} useEasing={true} delay={0.5} duration={4} suffix='+' style={{fontSize: '32px', fontFamily: 'ubuntu', fontWeight: '800'}}/>
                    <p>New NFT</p>
                    <p>ON Market</p>
                </Count3>
                <Count4>
                <CountUp start={0} end={2.76} decimals={2} useEasing={true} delay={0.5} duration={4} suffix='ETH' style={{fontSize: '32px', fontFamily: 'ubuntu', fontWeight: '800'}}/>
                    <p>Floor Price</p>
                    <p>Last Month</p>
                </Count4>

            </Counter>

        </>
    )
}
export default HeroCounter;