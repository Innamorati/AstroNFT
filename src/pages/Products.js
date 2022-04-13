import React, { useEffect, useState } from "react";
import FooterComp from "../components/Footer";
import Product from "../components/Product";
import { connect } from 'react-redux';
import ProductActions from "../redux/actions/ProductActions";
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
const Products = (props) => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    props.filterProducts(props.allProducts, search, category, fileType)
  }, [category, search, fileType, props.allProducts]);

  function handleSearch(event) {
    event.preventDefault();
    setSearch(event.target.value)
    console.log(search)
  }

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
          <input onChange={handleSearch} className="inputSearch" type="search" placeholder="Search" />
          <button className="ButtonSearch" type="submit" value="search">
            &nbsp;
          </button>
        </form>
        <div class="dropdown">
          <input type="checkbox" id="dropdown" />

          <label class="dropdown__face" for="dropdown">
            <div class="dropdown__text">Dropdown</div>

            <div class="dropdown__arrow"></div>
          </label>

          <ul class="dropdown__items">
            <Categories>
              <Title2>Categories</Title2>
              <ButtonCategory onClick={(event) => setCategory(event.target.innerText)}>Art</ButtonCategory>
              <ButtonCategory onClick={(event) => setCategory(event.target.innerText)}>Gaming</ButtonCategory>
              <ButtonCategory onClick={(event) => setCategory(event.target.innerText)}>Collectibles</ButtonCategory>
              <Title2>Order</Title2>
              <Order>
                <Option>Lowest Price</Option>
                <Option>Highest price</Option>
                <Option>More relevant</Option>
              </Order>

              <Title2>File Type</Title2>
              <ButtonCategory onClick={(event) => setFileType(event.target.innerText)}>Image</ButtonCategory>
              <ButtonCategory onClick={(event) => setFileType(event.target.innerText)}>Video</ButtonCategory>
            </Categories>
          </ul>
        </div>

        <ListProducts>
          <Product />
        </ListProducts>
      </ProductsFather>
      <FooterComp />
    </>
  );
};

const mapDispatchToProps = {
  filterProducts: ProductActions.filterProducts,
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.ProductReducer.allProducts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
