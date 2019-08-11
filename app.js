const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/health", function(req, res) {
  res.sendStatus(200).end();
});

app.listen(
  process.env.NODE_PORT || 3000,
  process.env.NODE_IP || "localhost",
  function() {
    console.log("Example app listening on port 3000!");
  }
);
