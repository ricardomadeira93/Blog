import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/UserModel.js";
import jwt from "jsonwebtoken";
const app = express();

const secret = "efwfwefewfwefhth45";
const salt = bcrypt.genSaltSync(10);

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:sk7VAlG3iI66jutd@cluster0.vyedwzg.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(3000);
