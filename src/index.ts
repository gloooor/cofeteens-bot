import express from "express";

import { bot } from "./bot";
import "./commands";

const app = express();

app.get('/', (req, res) => {
  res.json({server: 'Hello from server'})
})
  .get("/stop", (_req, res) => {
    bot.stop("Stoppp");
    return res.json({ bot: "stopped" });
  })
  .listen(3000, () => {
    console.log("Server started");
    bot.launch();
  });

