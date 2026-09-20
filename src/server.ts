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

app.get("/api/messages", (req, res) => {
  // TODO 3: valid normalized messages + optional ?symbol=
  const messages = marketMessages
    .map(normalizeMessage)
    .filter((message) => message !== null);

  res.json(messages);
});

app.get("/api/summary", (_req, res) => {
  // TODO 4
  res.json(buildSummary(marketMessages));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
