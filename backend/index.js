import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json("Hello!");
});

app.get("/products", async (req, res) => {
  const data = await prisma.product.findMany();
  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server Running");
});
