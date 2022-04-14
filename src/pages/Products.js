import React, { useEffect, useState } from "react";
import FooterComp from "../components/Footer";
import Product from "../components/Product";
import { connect } from 'react-redux';
import ProductActions from "../redux/actions/ProductActions";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
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
  const [sort, setSort] = useState('');


  const handleCategory = (event, newCategory) => {
    setCategory(newCategory);
  };

  const handleFileType = (event, newFileType) => {
    setFileType(newFileType);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  }

  useEffect(() => {
    props.filterProducts(props.allProducts, search, category, fileType, sort)
  }, [category, search, fileType, props.allProducts, sort]);

  function handleSearch(event) {
    event.preventDefault();
    setSearch(event.target.value)
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
        <TitleHead onClick={() => console.log(category, fileType)}>Products</TitleHead>
      </Hero>
      <ProductsFather>
        <form className="searchbox">
          <input onChange={handleSearch} className="inputSearch" type="search" placeholder="Search" />
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
              <ToggleButtonGroup
                color="standard"
                value={category}
                exclusive
                onChange={handleCategory}
                size='small'
              >
                <ToggleButton value="Art">Art</ToggleButton>
                <ToggleButton value="Gaming">Gaming</ToggleButton>
                <ToggleButton value="Collectibles">Collectibles</ToggleButton>
              </ToggleButtonGroup>
              <Title2 style={{marginTop: 10}}>Order</Title2>
              <Order onChange={handleSort}>
                <Option value='none'>More relevant</Option>
                <Option value='lowest'>Lowest Price</Option>
                <Option value='highest'>Highest price</Option>
              </Order>

              <Title2>File Type</Title2>
              <ToggleButtonGroup
                color="standard"
                value={fileType}
                exclusive
                onChange={handleFileType}
                size='small'
              >
                <ToggleButton value="Image">Image</ToggleButton>
                <ToggleButton value="Video">Video</ToggleButton>
              </ToggleButtonGroup>
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

const mapDispatchToProps = {
  filterProducts: ProductActions.filterProducts,
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.ProductReducer.allProducts,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
