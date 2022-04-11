const initialState = {
    allProducts: [],
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'all_products':
            return {
                ...state,
                allProducts: action.payload,
            }
        default:
            return state
    }
}
export default ProductReducer;