const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3001 || process.env.PORT;

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const URL = "mongodb://localhost:27017";

app.post("/contact", async (req, res) => {
  try {
    // open the connection
    let connection = await mongoClient.connect(URL);
    // choose the db
    let db = connection.db("Users");
    // choose the collection
    let contact = await db
      .collection("Contact Information")
      .insertOne(req.body);
    // close the connection
    connection.close();
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in posting data",
    });
  }
});

app.post("/employer", async (req, res) => {
  try {
    // open the connection
    let connection = await mongoClient.connect(URL);
    // choose the db
    let db = connection.db("Users");
    // choose the collection
    let employer = await db
      .collection("Employer Information")
      .insertOne(req.body);
    // close the connection
    connection.close();
    res.json(employer);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in posting data",
    });
  }
});

app.listen(PORT, () => {
  console.log("Web Server started");
});
