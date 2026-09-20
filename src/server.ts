// Backend server for the trades application

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { marketMessages } from "./data.js";
import { buildSummary, normalizeMessage } from "./trades.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// GET /api/messages
// Optional filter: /api/messages?symbol=eurusd
app.get("/api/messages", (req, res) => {
  let messages = marketMessages
    .map(normalizeMessage)
    .filter((message) => message !== null);

  const symbolQuery = req.query.symbol;

  if (typeof symbolQuery === "string" && symbolQuery.trim() !== "") {
    const normalizedSymbol = symbolQuery.trim().toUpperCase();

    messages = messages.filter(
      (message) => message.symbol === normalizedSymbol
    );
  }

  res.json(messages);
});

// GET /api/summary
app.get("/api/summary", (_req, res) => {
  const summary = buildSummary(marketMessages);

  res.json(summary);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});