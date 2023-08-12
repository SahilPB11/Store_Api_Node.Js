import express, { urlencoded } from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFound from "./middleware/not-found.js";
import dotenv from "dotenv";
dotenv.config();

export const app = express();
app.use(express.json());
app.use(urlencoded({ extended: false }));
// routes
app.get("/", (req, res) => {
  res.send(`<h1>Store Api</h1><a href="/api/v1/products">Products Route</a>`);
});

// product route


// forr handling the error
app.use(notFound)
app.use(errorHandlerMiddleware);
