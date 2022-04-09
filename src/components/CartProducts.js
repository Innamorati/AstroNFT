import React from 'react'
import astro from "../Assest/image1.png";
import astro3 from '../Assest/imagen3.png'
import IconEtherium from '../Assest/IconEth.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {ContainerCart, 
        HeaderCart,
        CardProducts,
        CardProducts2,
        ImageProducts,
        TitleProducts,
        DivTitle,
        CategoryProducts,
        PrecioEth,
        IconEth,
        Ether,
        PrecioArg,
        ArsMoney,
        Cruz,
        Method,
        BtnCart,
        ButtonMethod,
        ImgAstro,
        DivGeneral,
        HeaderCart2} from '../styles/StyleCartProducts'

const CartProducts = () => {
  return (
    <DivGeneral>
      <ContainerCart>
        <HeaderCart>
          Cart
        </HeaderCart>
        <CardProducts>
          <ImageProducts
            style={{
              backgroundImage: `url(${astro}) `,
              backgroundPosition: "center",
            }}
          />
          <DivTitle>
            <TitleProducts>One Astro #1715 by GIIO</TitleProducts>
            <CategoryProducts>CATEGORY: Premium TYPE: Image</CategoryProducts>
          </DivTitle>
          <PrecioArg>
            <PrecioEth>
              {<IconEth
                  style={{
                    backgroundImage: `url(${IconEtherium}) `,
                  }}
                />}
              <Ether>0.121 ETH</Ether>
              
            </PrecioEth>
            <ArsMoney>≈ ARS$ 46,828.55</ArsMoney>
          </PrecioArg>
            <FontAwesomeIcon style={{ width: '35px',height:'35px', cursor: 'pointer', marginRight:'1rem',color:'#45A9F2' }} icon={faXmark} />
        </CardProducts>
        <CardProducts>
          <ImageProducts
              style={{
                backgroundImage: `url(${astro}) `,
                backgroundPosition: "center",
              }}
            />
          <DivTitle>
            <TitleProducts>One Astro #1715 by GIIO</TitleProducts>
            <CategoryProducts>CATEGORY: Premium TYPE: Image</CategoryProducts>
          </DivTitle>
          <PrecioArg>
            <PrecioEth>
              {<IconEth
                  style={{
                    backgroundImage: `url(${IconEtherium}) `,
                  }}
                />}
              <Ether>0.121 ETH</Ether>
              
            </PrecioEth>
            <ArsMoney>≈ ARS$ 46,828.55</ArsMoney>
          </PrecioArg>
          <FontAwesomeIcon style={{ width: '35px',height:'35px', cursor: 'pointer', marginRight:'1rem', color:'#45A9F2' }} icon={faXmark} />
        </CardProducts>
        <HeaderCart2>
          Method
        </HeaderCart2>
        <Method>
          <CardProducts2>
            <ImageProducts
              style={{
                backgroundImage: `url(${astro}) `,
              }}
            />
            <DivTitle>
              <TitleProducts>MercadoPago</TitleProducts>
              <CategoryProducts>Debit or Credit Card</CategoryProducts>
              <CategoryProducts>PagoFácil or RapiPago</CategoryProducts>
            </DivTitle>

              <FontAwesomeIcon style={{ width: '35px',height:'35px', cursor: 'pointer', marginRight:'1rem', color:'#45A9F2'  }} icon={faXmark} />

          </CardProducts2>
          <CardProducts2>
            <ImageProducts
                style={{
                  backgroundImage: `url(${astro}) `,
                }}
              />
            <DivTitle>
              <TitleProducts>Paypal</TitleProducts>
              <CategoryProducts>Debit or Credit Card</CategoryProducts>
              <CategoryProducts>Paypal Credit</CategoryProducts>
            </DivTitle>
                
              <FontAwesomeIcon style={{ width: '35px',height:'35px', cursor: 'pointer', marginRight:'1rem', color:'#45A9F2' }} icon={faXmark} />

          </CardProducts2>
        </Method>
        <ButtonMethod>
          <BtnCart>
            Purchase
          </BtnCart>
        </ButtonMethod>
      </ContainerCart>
      <ImgAstro
        style={{
          backgroundImage: `url(${astro3})`
        }}
      />
    </DivGeneral>
  )
}

export default CartProducts