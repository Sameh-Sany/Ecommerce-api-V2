// Load required packages
const { validationResult } = require("express-validator");
const responseSuccess = require("../helpers/responses/success");
const ResourceNotFoundError = require("../helpers/errors/ResourceNotFoundError");
const ValidationError = require("../helpers/errors/ValidationError");
const Product = require("../models/product");

exports.index = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(responseSuccess(products));
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.json(responseSuccess(product));
  } catch (error) {
    console.log(error);
  }
};

exports.store = async (req, res) => {
  const { name, price, description, image } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors.array());
  }

  const product = await new Product({
    name,
    price,
    description,
    image,
  }).save();

  res.json(responseSuccess(product));
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors.array());
  }

  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new ResourceNotFoundError("Product not found");
  }

  res.json(responseSuccess(product));
};

exports.destroy = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ResourceNotFoundError("Product not found");
  }

  res.json(responseSuccess(product));
};
