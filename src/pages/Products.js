import React from "react";
import FooterComp from "../components/Footer";
import Product from "../components/Product";
import "../styles/StyleSearch.css";
import "../styles/StyleDropdown.css";
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
  InputPrice2,
  Categories,
  ButtonCategory,
  DivFilterProducts,
  Hero,
  TitleHead,
  Option,
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
        <div class="dropdown2">
          <input type="checkbox" id="dropdown2" />

          <label class="dropdown2__face" for="dropdown2">
            <div class="dropdown2__text">Filters NFTs</div>

            <div class="dropdown2__arrow"></div>
          </label>

          <ul class="dropdown2__items">
            <Categories>
              <Title2>Categories</Title2>
              <ButtonCategory>Premium</ButtonCategory>
              <ButtonCategory>Arts</ButtonCategory>
              <ButtonCategory>Sports</ButtonCategory>
              <ButtonCategory>Entertainment</ButtonCategory>
              <ButtonCategory>Gaming</ButtonCategory>
              <ButtonCategory>Collectibles</ButtonCategory>
              <Title2>Order</Title2>
              <Order>
                <Option>Lowest Price</Option>
                <Option>Highest price</Option>
                <Option>More relevant</Option>
              </Order>

              <Title2>File Type</Title2>
              <ButtonCategory>Image</ButtonCategory>
              <ButtonCategory>Video</ButtonCategory>
            </Categories>
          </ul>
        </div>
      </ProductsFather>
      <ListProducts>
        <Product />
      </ListProducts>
      <FooterComp />
    </>
  );
};

export default Products;
