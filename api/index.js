import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/UserModel.js";
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:sk7VAlG3iI66jutd@cluster0.vyedwzg.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password:bcrypt.hashSync(password,salt) });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.listen(3000);
