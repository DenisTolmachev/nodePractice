const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.json());
//app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
  next();
});

app.post("/home", (req, res) => {
  console.log(req.body);
  res.json({ javascript: "object", body: req.body });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server", err);
  }
  console.log(`Server started on port ${PORT}`);
});
