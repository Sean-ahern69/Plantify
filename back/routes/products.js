const { response } = require("express");
const express = require("express");
const router = express.Router();
// below is where you edit variable names based on your variable/file structure names
const product = require("../models/product");
// GET (all) products route
router.get('/', async (req, res) => {
    const products = await product.find();
    res.json(products)
});
// POST new product
router.post('/addproduct', async (req, res) => {
    const newproduct = new product(req.body);
    const savedproduct = await newproduct.save()
    res.json(savedproduct)
});
// GET (single) product by ID
router.get('/get/:id', async (req, res) => {
    const IDed_product = await product.findById({ _id : req.params.id });
    res.json(IDed_product)
});
// DELETE a product by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_product = await product.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_product)
});
// UPDATE a product by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_product = await product.findByIdAndUpdate(
        { _id : req.params.id }, { $set: req.body }
    );
    res.json(toUpdate_product)
});

module.exports = router