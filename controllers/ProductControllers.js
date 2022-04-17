const Product = require("../models/Product");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json({
        success: true,
        response: products,
        error: null,
      });
    } catch (err) {
      res.json({
        success: false,
        response: null,
        error: err.message,
      });
    }
  },
  getOneProduct: async (req, res) => {
    const id = req.params.id;
    try {
      const products = await Product.findOne({ _id: id });
      res.json({
        success: true,
        response: products,
        error: null,
      });
    } catch (err) {
      res.json({
        success: false,
        response: null,
        error: err.message,
      });
    }
  },
  addProduct: async (req, res) => {
    const {
      name,
      creator,
      price,
      file,
      description,
      owner,
      red,
      contractAddress,
      category,
      fileType,
    } = req.body.data;

    try {
      const alreadyAdded = await Product.findOne({ name: name });
      if (alreadyAdded) {
        throw new Error(`NFT ${name} already exists in the database.`);
      }

      const newProduct = new Product({
        name,
        creator,
        price,
        file,
        description,
        owner,
        red,
        contractAddress,
        category,
        fileType,
      });

      await newProduct.save();

      res.json({
        success: true,
        data: newProduct,
        error: null,
        message: "New product added succesfully",
      });
    } catch (err) {
      res.json({
        success: false,
        response: "Product not added",
        error: err.message,
        message: "Error. Product not added.",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.id });
      res.json({
        success: true,
        response: `NFT id:${product} deleted.`,
        error: null,
      });
    } catch (err) {
      res.json({
        success: false,
        response: `We couldn't delete the product`,
        error: err.message,
      });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const productUpdated = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body.data },
        { new: true }
      );
      res.json({
        success: true,
        response: productUpdated,
        error: null,
        message: "Product updated",
      });
    } catch (err) {
      res.json({
        success: false,
        response: null,
        error: err.message,
        message: "Error. Product not updated.",
      });
    }
  },
  likeDislike: async (req, res) => {
    const id = req.params.id
    const userId = req.user.id

    await Product.findOne({ _id: id })

      .then((product) => {
        if (product.likes.includes(userId)) {
          Product.findOneAndUpdate({ _id: id }, { $pull: { likes: userId } }, { new: true })
            .then((response) => res.json({ success: true, response: response.likes }))
            .catch((error) => console.log(error))
        }
        else {
          Product.findOneAndUpdate({ _id: id }, { $push: { likes: userId } }, { new: true })
            .then((response) => res.json({ success: true, response: response.likes }))
            .catch((error) => console.log(error))
        }
      })
      .catch((error) => res.json({ success: false, response: error }))
  }
};

module.exports = productController;
