import React from "react";
import FooterComp from "../components/Footer";
import Product from "../components/Product";

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
} from "../styles/StyledProducts";

const Products = () => {
  return (
    <>
      <ProductsFather>
        <FilterProducts>
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
          <Title2>Categories</Title2>

          <Categories>
            <ButtonCategory>Premium</ButtonCategory>
            <ButtonCategory>Arts</ButtonCategory>
            <ButtonCategory>Sportss</ButtonCategory>
            <ButtonCategory>Entertainment</ButtonCategory>
            <ButtonCategory>Gaming</ButtonCategory>
          </Categories>
          <Categories>
            <Title2>File Type</Title2>

            <ButtonCategory>Image</ButtonCategory>
            <ButtonCategory>Video</ButtonCategory>
            <ButtonCategory>Audio</ButtonCategory>
          </Categories>
        </FilterProducts>
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
        </ListProducts>
      </ProductsFather>
      <FooterComp />
    </>
  );
};

export default Products;
