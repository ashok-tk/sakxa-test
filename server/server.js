const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Yaay! It works.");
});

app.get("/fruits", (req, res) => {
  res.status(200).send({ fruits: ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌"] });
  res.end();
});
app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("LIstening to Port 5000");
  }
});
