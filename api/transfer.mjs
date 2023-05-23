import express from "express";
import db from "../mongo/connection.mjs";

const router = express.Router();

router.get("/logistics", async (req, res) => {
  const collectionNameFrom = "second-edition";
  let collectionFrom = await db.collection(collectionNameFrom);

  const collectionNameTo = "third-edition";
  let collectionTo = await db.collection(collectionNameTo);

  let results = await collectionFrom.find({}).toArray();
  results.map(async (item) => await collectionTo.insertOne(item));
  res.send("done");
});

export default router;
