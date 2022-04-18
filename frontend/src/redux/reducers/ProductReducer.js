const initialState = {
    allProducts: [],
    filteredProducts: [],
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'all_products':
            return {
                ...state,
                allProducts: action.payload,
            }
        case "one_product":
            return {
                ...state,
                oneProduct: action.payload,
            }
        case 'filter_products':
            let { products, search, categories, fileType, sort } = action.payload;
            let filtered = [];

            if (search.length) {
                if (!categories) {
                    if (!fileType) {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()))
                    } else {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) && product.fileType === fileType)
                    }
                } else {
                    if (!fileType) {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) && product.category === categories)
                    } else {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) && product.category === categories && product.fileType === fileType)
                    }
                }
            } else {
                if (!categories) {
                    if (!fileType) {
                        filtered.push(...products);
                    } else {
                        filtered = products.filter(product => product.fileType === fileType);
                    }
                } else {
                    if (!fileType) {
                        filtered = products.filter(product => product.category === categories);
                    } else {
                        filtered = products.filter(product => product.category === categories && product.fileType === fileType);
                    }
                }
            }

            if (sort === 'lowest') {
                filtered = filtered.sort((a, b) => a.price - b.price);
            } else if (sort === 'highest') {
                filtered = filtered.sort((a, b) => b.price - a.price);
            } else {
                filtered = filtered.sort((a, b) => a.price - b.price);
            }

            return {
                ...state,
                filteredProducts: filtered
            }
        default:
            return state
    }
}
export default ProductReducer;
