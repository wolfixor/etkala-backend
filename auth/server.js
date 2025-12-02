const express = require('express');
const app = express();
app.get("/", (req, res) => {
  res.send("AUTH Service is working!");
});
app.listen(8000, () => console.log("AUTH service listening on 8000"));
