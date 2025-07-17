import { Product } from "../db/schemas/Product.js";

export const getProducts = () => Product.find();

export const getProductById = (id) => Product.findById(id);

export const createProduct = (data) => Product.create(data);

export const patchProduct = (id, data) => Product.findByIdAndUpdate(id, data, {new: true});

export const deleteProduct = (id) => Product.findByIdAndDelete(id);
