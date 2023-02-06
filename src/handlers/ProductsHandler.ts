import { Products, rProduct } from "../models/products-model";
import verifyAuthToken from "./verify-auth";
import { Response, Request, Application } from "express";
const newProduct: Products = new Products();

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await newProduct.index();
  res.json(products);
};

const getProductById = async (req: Request, res: Response) => {
  const product = await newProduct.show(parseInt(req.params.id));
  res.json(product);
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const productc: rProduct = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };

    const p = await newProduct.create(productc);
    res.json(p);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export default (app: Application) => {
  app.get("/products", getAllProducts);
  app.get("/products/:id", getProductById);
  app.post("/products", verifyAuthToken, createProduct);
};
