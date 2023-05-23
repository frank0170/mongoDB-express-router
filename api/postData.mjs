import express from "express";
import db from "../mongo/connection.mjs";

const router = express.Router();

router.post("/first", async (req, res) => {
  const newPost = {
    name: req.body.name,
    age: req.body.age,
  };
  const collectionName = "first-edition";
  let collection = await db.collection(collectionName);
  await collection.insertOne(newPost);
  res.send(newPost).status(200);
});

router.post("/second", async (req, res) => {
  const newPost = {
    name: req.body.name,
    age: req.body.age,
  };
  const collectionName = "second-edition";
  let collection = await db.collection(collectionName);
  await collection.insertOne(newPost);
  res.send(newPost).status(200);
});

router.post("/third", async (req, res) => {
  const newPost = {
    name: req.body.name,
    age: req.body.age,
  };
  const collectionName = "third-edition";
  let collection = await db.collection(collectionName);
  await collection.insertOne(newPost);
  res.send(newPost).status(200);
});

export default router;
