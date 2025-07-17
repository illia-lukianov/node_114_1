import createHttpError from "http-errors";
import { createProduct, deleteProduct, getProductById, getProducts, patchProduct } from "../services/products.js";

export const getProductsController = async (req, res) => {
  const products = await getProducts();
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const product = await getProductById(req.params.productId);

  if (product === null) {
    throw new createHttpError.NotFound('Product not found');
  };

  return res.json({
    status: 200,
    message: 'Successfully found products!',
    data: product
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  return res.status(201).json({
       status: 201,
       message: "Successfully created a product!",
       data: product
   });
};

export const patchProductController = async (req, res) => {
  const product = await patchProduct(req.params.productId, req.body);

  if (product === null) {
   throw new createHttpError.NotFound('Product not found');
  };

  return res.json({
    status: 200,
    message: "Successfully patched a product!",
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const product = await deleteProduct(req.params.productId);

  if (product === null) {
   throw new createHttpError.NotFound('Product not found');
  };

  return res.sendStatus(204);
};