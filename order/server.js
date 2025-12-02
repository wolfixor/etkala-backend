const express = require('express');
const app = express();
app.get("/", (req, res) => {
  res.send("ORDER Service is working!");
});
app.listen(8000, () => console.log("ORDER service listening on 8000"));
