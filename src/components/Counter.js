import React from "react";
import { Counter, Count1, Count2, Count3, Count4 } from "../styles/CounterStyle"

const HeroCounter = () => {
    return (
        <>
            <Counter>
                <Count1>
                    <p>259K</p>
                    <p>NFT Sold</p>
                    <p>Last Month</p>
                </Count1>
                <Count2>
                    <p>10K</p>
                    <p>New User</p>
                    <p>Last Week</p>
                </Count2>
                <Count3>
                    <p>200</p>
                    <p>New NFT</p>
                    <p>ON Market</p>
                </Count3>
                <Count4>
                    <p>2</p>
                    <p>Floor Price</p>
                    <p>Last Month</p>
                </Count4>

            </Counter>

        </>
    )
}
export default HeroCounter;