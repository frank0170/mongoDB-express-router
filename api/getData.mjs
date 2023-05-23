import express from "express";
import db from "../mongo/connection.mjs";

const router = express.Router();

router.get("/first", async (req, res) => {
  const collectionName = "first-edition";
  let collection = await db.collection(collectionName);
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/second", async (req, res) => {
  const collectionName = "second-edition";
  let collection = await db.collection(collectionName);
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/third", async (req, res) => {
  const collectionName = "third-edition";
  let collection = await db.collection(collectionName);
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

export default router;
