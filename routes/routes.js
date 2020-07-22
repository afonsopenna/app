import express from "express";
import mongoose from "mongoose";

//const { Mongoose } = require("mongoose");
const transactionRouter = express.Router();

transactionRouter.get("/t", (_, res) => {
  const dadosSchema = mongoose.Schema({
    description: { type: String },
    value: { type: Number },
    category: { type: String },
    year: { type: Number },
    month: { type: Number },
  });
  mongoose.model("transactions", dadosSchema);

  const transactions = mongoose.model("transactions");

  new transactions({
    description: "Teste",
  })
    .save()
    .then(() => {
      console.log("Documento inserido");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("concluido");
});

export default transactionRouter;
