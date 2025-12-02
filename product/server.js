const express = require('express');
const app = express();
app.get("/", (req, res) => {
  res.send("PRODUCT Service is working!");
});
app.listen(8000, () => console.log("PRODUCT service listening on 8000"));
