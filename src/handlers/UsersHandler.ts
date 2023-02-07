import { Users, rUser, User } from "../models/users-model";
import verifyAuthToken from "./verify-auth";
import jwt from "jsonwebtoken";
import { Response, Request, Router, Application } from "express";
import dotenv from "dotenv";
dotenv.config();

const newUser: Users = new Users();

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await newUser.index();
    res.json(users);
  } catch (e) {
    res.status(400).json(e);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await newUser.show(parseInt(req.params.id));
    res.json(user);
  } catch (e) {
    res.status(400).json(e);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const userc: rUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    };
    const u: User = await newUser.create(userc);
    var j = jwt.sign({ user: u }, <string>process.env.TOKEN_SECRET);
    res.status(201).json({ Token: j });
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export default (app: Application) => {
  app.get("/users", verifyAuthToken, getAllUsers);
  app.get("/users/:id", verifyAuthToken, getUserById);
  app.post("/users", createUser);
};
