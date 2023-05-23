import express from "express";
import db from "../mongo/connection.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.delete("/first", async (req, res) => {
  const collectionName = "first-edition";
  let collection = await db.collection(collectionName);
  const query = { name: null, age: null };
  const deleteData = await collection.find(query).toArray();
  console.log(deleteData)
  await deleteData.map(async item => await collection.deleteOne( {_id: new ObjectId(item._id) }))
  res.send(deleteData).status(200);
});

router.delete("/second", async (req, res) => {
    const collectionName = "second-edition";
    let collection = await db.collection(collectionName);
    const query = { name: null, age: null };
    const deleteData = await collection.find(query).toArray();
    console.log(deleteData)
    await deleteData.map(async item => await collection.deleteOne( {_id: new ObjectId(item._id) }))
    res.send(deleteData).status(200);
  });

  router.delete("/third", async (req, res) => {
    const collectionName = "third-edition";
    let collection = await db.collection(collectionName);
    const query = { name: null, age: null };
    const deleteData = await collection.find(query).toArray();
    console.log(deleteData)
    await deleteData.map(async item => await collection.deleteOne( {_id: new ObjectId(item._id) }))
    res.send(deleteData).status(200);
  });

export default router;
