const Product = require('../models/Product');

const productController = {

    getAllProducts: async (req, res) => {

        try {
            const products = await Product.find()
            res.json({
                success: true,
                response: products,
                error: null
            });
        } catch (err) {
            res.json({
                success: false,
                response: null,
                error: err.message
            });
        }
    }

}

module.exports = productController;