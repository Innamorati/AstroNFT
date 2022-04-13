import axios from "axios";

const ProductActions = {
    addProduct: (data) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/products', { data });
            dispatch({ type: 'user', payload: { success: res.data.success, message: res.data.message, view: true } });
        }
    },
    getAllProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/products');
            dispatch({ type: 'all_products', payload: res.data.response });
        }
    },
    deleteProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.delete(`http://localhost:4000/api/product/${id}`)
        }
    },
    updateProduct: (id, data) => {
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api/product/${id}`, { data })
        }
    },
    filerProducts: (products, search, categories, fileType) => {
        return (dispatch, getState) => {
            dispatch({ type: 'filter_products', payload: { products, search, categories, fileType } })
        }
    }
}

export default ProductActions;