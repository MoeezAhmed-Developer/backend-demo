import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running successfully.",
    status: "success",
  });
});

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "API is working correctly.",
    status: "success",
  });
});

app.listen(3200);
