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
        case 'filter_products':
            let { products, search, categories, fileType } = action.payload;
            let filtered = [];

            if (search) {
                if (categories === '') {
                    if(fileType === '') {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()))
                    } else {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) && product.fileType === fileType)
                    }
                } else {
                    if(fileType === '') {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) && product.category === categories)
                    } else {
                        filtered = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase().trim()) && product.category === categories && product.fileType === fileType)
                    }
                }
            } else {
                if (categories === '') {
                    if(fileType === '') {
                        filtered.push(...products);
                    } else {
                        filtered = products.filter(product => product.fileType === fileType);
                    }
                } else {
                    if(fileType === '') {
                        filtered = products.filter(product => product.category === categories);
                    } else {
                        filtered = products.filter(product => product.category === categories && product.fileType === fileType);
                    }
                }
            }
            console.log(search);
            console.log(categories);
            console.log(fileType);

            return {
                ...state,
                filteredProducts: filtered
            }
        default:
            return state
    }
}
export default ProductReducer;