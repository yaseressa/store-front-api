import { Orders, Order } from "../models/orders-model";
import verifyAuthToken from "./verify-auth";
import { Response, Request, Router, Application } from "express";
const newOrder: Orders = new Orders();

const currentOrder = async (req: Request, res: Response) => {
  try {
    const user_id: number = parseInt(req.params.id);
    const currentOrder: Order = await newOrder.CurrentOrderByUserId(user_id);
    return res.json(currentOrder);
  } catch (e) {
    res.status(400).json(e);
  }
};

export default (app: Application) => {
  app.get("/current/:id", verifyAuthToken, currentOrder);
};
