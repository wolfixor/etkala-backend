const express = require('express');
const app = express();
app.get("/", (req, res) => {
  res.send("TEST1 Service is working!");
});
app.listen(8000, () => console.log("API service listening on 8000"));
