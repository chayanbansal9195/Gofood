const express = require("express");
const mongoDb = require("./db");

const app = express();
const port = 5000;

mongoDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json())
app.use("/api/", require("./routes/CreateUser"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
