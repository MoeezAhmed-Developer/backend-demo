import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    api: "All is fine.",
  });
});

app.listen(3200);
