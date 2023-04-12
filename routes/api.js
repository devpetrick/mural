const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");
const cors = require("cors");
const posts = require("../model/posts");

const options = {
  orogin: "http://localhost:3000",
};

router.use(cors(options));

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParse.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  posts.newPost(title, description);
  res.send("post adicionado!");
});

module.exports = router;
