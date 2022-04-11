import React from 'react'
import { Accordion } from "react-bootstrap";
import {FatherDetails,
        DivFather,
        ImgDetails,
        HeaderDetails,
        TitleDetails,
        CategoryDetails,
        BtnLike,
        HeaderDetails2,
        PriceDetails,
        PriceFatherDetails,
        TitlePrice,
        DivPrice,
        IconEther,
        EtherDetails,
        ArMoney,
        BtnDetails,
        BtnBuy,
        CreatorDetails,
        Creator,
        TitleCreator,
        DivCreator,
        } from '../styles/StyleDetailsProducts'


const DetailsProducts = () => {
  return (
    <DivFather>
        <FatherDetails>
            <HeaderDetails>
                <TitleDetails>Fekiki Club #187</TitleDetails>
                <CategoryDetails>Collectibles</CategoryDetails>
                <BtnLike></BtnLike>
            </HeaderDetails>
            <ImgDetails
                style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/image1.png"
                    }')`,
                }}
            />
            <HeaderDetails2>
                <PriceFatherDetails>
                    <PriceDetails>
                        <TitlePrice>Price</TitlePrice>
                        <DivPrice>
                            <IconEther
                                style={{
                                    backgroundImage: `url('${
                                    process.env.PUBLIC_URL + "/assets/IconEth.png"
                                    }')`,
                                }}
                            />
                            <EtherDetails>0.121 ETH</EtherDetails>
                        </DivPrice>
                        <ArMoney>≈ ARS$ 46,828.55</ArMoney>
                    </PriceDetails>
                    <BtnDetails>
                        <BtnBuy>BUY</BtnBuy>
                    </BtnDetails>
                </PriceFatherDetails>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Details</Accordion.Header>
                        <Accordion.Body>
                            <CreatorDetails>
                                <Creator>
                                    <TitleCreator>Creator</TitleCreator>
                                    <DivCreator>Fekiki</DivCreator>
                                </Creator>
                                <Creator>
                                    <TitleCreator>Network</TitleCreator>
                                    <DivCreator>BSC</DivCreator>
                                </Creator>
                                <Creator>
                                    <TitleCreator>Contract Address</TitleCreator>
                                    <DivCreator>0x1dDB...a9Ec</DivCreator>
                                </Creator>
                                <Creator>
                                    <TitleCreator>Token ID</TitleCreator>
                                    <DivCreator>100300925873</DivCreator>
                                </Creator>
                            </CreatorDetails>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </HeaderDetails2>
        </FatherDetails>
    </DivFather>
  )
}

export default DetailsProducts