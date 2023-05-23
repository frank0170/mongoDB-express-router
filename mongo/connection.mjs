import { MongoClient } from "mongodb";

const connectionString = "mongoDB-serv";

const client = new MongoClient(connectionString);

const conn = await client.connect()

let db = await conn.db("practice-v1");

export default db;