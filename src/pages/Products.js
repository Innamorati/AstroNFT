import React from "react";
import FooterComp from "../components/Footer";
import Product from "../components/Product";
import { Accordion } from "react-bootstrap";
import "../styles/StyleSearch.css";
import {
  ProductsFather,
  FilterProducts,
  ListProducts,
  FilterClean,
  Title,
  Title2,
  Order,
  SelectPrice,
  Slider,
  Input,
  InputPrice,
  InputTextPrice,
  Categories,
  ButtonCategory,
  DivFilterProducts,
  Hero,
  TitleHead,
  Search,
} from "../styles/StyledProducts";
//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS
const Products = () => {
  return (
    <>
      <Hero
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/HeroProducts.png"
            }')`,
          backgroundPosition: "center center",
        }}
      >
        <TitleHead>Products</TitleHead>
      </Hero>
      <ProductsFather>
        <form className="searchbox">
          <input className="inputSearch" type="search" placeholder="Search" />
          <button className="ButtonSearch" type="submit" value="search">
            &nbsp;
          </button>
        </form>
        <Accordion
          style={{
            width: "70%",
          }}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Filters</Accordion.Header>
            <Accordion.Body>
              <FilterProducts>
                <DivFilterProducts>
                  <FilterClean>
                    <Title>Filters</Title>
                    <Title>Clean all</Title>
                  </FilterClean>
                  <Title2>Order</Title2>
                  <Order>
                    <option>Lowest Price</option>
                    <option>Highest price</option>
                    <option>More relevant</option>
                  </Order>
                  <SelectPrice>
                    <Title2>Price</Title2>
                    <Slider>
                      <Input
                        type="range"
                        min="0"
                        max="100"
                        onchange="rangevalue.value=value"
                      />
                    </Slider>
                  </SelectPrice>
                  <InputPrice>
                    <Title2>From</Title2>
                    <InputTextPrice />
                    <Title2>to</Title2>
                    <InputTextPrice />
                  </InputPrice>
                </DivFilterProducts>

                <DivFilterProducts>
                  <FilterClean>
                    <Title2>Categories</Title2>
                  </FilterClean>

                  <Categories>
                    <ButtonCategory>Premium</ButtonCategory>
                    <ButtonCategory>Arts</ButtonCategory>
                    <ButtonCategory>Sports</ButtonCategory>
                    <ButtonCategory>Entertainment</ButtonCategory>
                    <ButtonCategory>Gaming</ButtonCategory>
                    <ButtonCategory>Collectibles</ButtonCategory>
                  </Categories>
                  <Categories>
                    <Title2>File Type</Title2>

                    <ButtonCategory>Image</ButtonCategory>
                    <ButtonCategory>Video</ButtonCategory>
                    <ButtonCategory>Audio</ButtonCategory>
                  </Categories>
                </DivFilterProducts>
              </FilterProducts>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <ListProducts>
          {/* 1 */}
          <Product />
          {/* 2 */}
          <Product />
          {/* 3 */}
          <Product />
          {/* 1 */}
          <Product />
          {/* 2 */}
          <Product />
          {/* 3 */}
          <Product />
          {/* 1 */}
          <Product />
          {/* 2 */}
          <Product />
          {/* 3 */}
          <Product />
          {/* 3 */}
          <Product />
          {/* 3 */}
          <Product />
          {/* 3 */}
          <Product />
          {/* 3 */}
          <Product />
        </ListProducts>
      </ProductsFather>
      <FooterComp />
    </>
  );
};

export default Products;
