const initialState = {
  allProducts: [],
  oneProduct: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "all_products":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "one_product":
      return {
        ...state,
        oneProduct: action.payload,
      };

    default:
      return state;
  }
};
export default ProductReducer;
