const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors);
app.use(express.json());

const PORT = process.env.PORT || 8080;

const posts_routes = require("./routes/post_routes");

app.use("/api/posts", posts_routes);


app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
