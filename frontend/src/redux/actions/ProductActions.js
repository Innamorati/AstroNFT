import axios from "axios";

const ProductActions = {
  addProduct: (data) => {
    return async (dispatch, getState) => {
      const res = await axios.post("https://astronft.herokuapp.com/api/products", {
        data,
      });
      dispatch({
        type: "user",
        payload: {
          success: res.data.success,
          message: res.data.message,
          view: true,
        },
      });
    };
  },
  getAllProducts: () => {
    return async (dispatch, getState) => {
      const res = await axios.get("https://astronft.herokuapp.com/api/products");
      dispatch({ type: "all_products", payload: res.data.response });
    };
  },
  getOneProduct: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get("https://astronft.herokuapp.com/api/details/" + id);
      console.log(res);
      dispatch({ type: "one_product", payload: res.data.response });
    };
  },
  deleteProduct: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.delete(`https://astronft.herokuapp.com/api/product/${id}`);
    };
  },
  updateProduct: (id, data) => {
    return async (dispatch, getState) => {
      const res = await axios.put(`https://astronft.herokuapp.com/api/product/${id}`, {
        data,
      });
    };
  },
  filterProducts: (products, search, categories, fileType, sort) => {
    return (dispatch, getState) => {
      dispatch({
        type: "filter_products",
        payload: { products, search, categories, fileType, sort },
      });
    };
  },
  likeDislike: (productId) => {
    const token = localStorage.getItem('token')
    return async () => {
      try {
        let response = await axios.put(`http://localhost:4000/api/LikeDislike/${productId}`, {}, { headers: { 'Authorization': 'Bearer ' + token } })
        console.log(response.data.success)
        return response
      }
      catch (error) {
        console.log(error)
      }
    }
  }
};

export default ProductActions;
