import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json("Hello!");
});

app.get("/products", async (req, res) => {
  const data = await prisma.product.findMany();
  res.json(data);
});

app.post("/products", async (req, res) => {
  const { name, price, description } = req.body;
  console.log(name, price, description);
  await prisma.product.createMany({
    data: { name, price, description },
  });
  res.json("Product Added");
});

app.listen(PORT, () => {
  console.log("Server Running");
});
