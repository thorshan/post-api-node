const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./config/database");
const PostController = require("./controller/PostController");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json());
app.use(cors());

connectToDb();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/posts", PostController.fetchAllPosts);

app.post("/posts", PostController.newPost);

app.get("/post/:id", PostController.viewPost);

app.put("/post/:id", PostController.updatePost);

app.delete("/post/:id", PostController.deletePost);

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`,
  );
});
