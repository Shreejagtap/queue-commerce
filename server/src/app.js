import express from "express";
import cors from "cors";


// import routes here



export const app = express();

app.use(cors());
app.use(express.json());

// initialize routes here

app.get("/", (req, res) => {
  res.send("Welcome to the Queue Commerce API!");
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
