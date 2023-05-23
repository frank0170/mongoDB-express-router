import express from "express";
import cors from "cors";
import getRecords from "./api/getData.mjs";
import postRecords from "./api/postData.mjs";
import deleteData from "./api/deleteData.mjs";
import transferData from "./api/transfer.mjs";

const PORT = 5080;
const app = express();

//middleware

app.use(cors());
app.use(express.json());

app.use("/get/data", getRecords);
app.use("/post/data", postRecords);
app.use("/delete/data", deleteData);
app.use("/transfer", transferData);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
