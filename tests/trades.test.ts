import test from "node:test";
import assert from "node:assert/strict";
import { buildSummary, normalizeMessage } from "../src/trades.js";

test("normalizeMessage normalizes symbol and side", () => {
  const result = normalizeMessage({
    id: 1,
    symbol: " eurusd ",
    side: "buy",
    price: 1.0812,
    quantity: 1000000,
    broker: "Alpha"
  });

  assert.deepEqual(result, {
    id: 1,
    symbol: "EURUSD",
    side: "BUY",
    price: 1.0812,
    quantity: 1000000,
    broker: "Alpha"
  });
});

test("normalizeMessage rejects invalid messages", () => {
  assert.equal(normalizeMessage({
    id: 1, symbol: "", side: "BUY", price: 1, quantity: 100, broker: "Alpha"
  }), null);

  assert.equal(normalizeMessage({
    id: 2, symbol: "EURUSD", side: "BUY", price: -1, quantity: 100, broker: "Alpha"
  }), null);
});

test("buildSummary computes best bid, best ask and totals", () => {
  const result = buildSummary([
    { id: 1, symbol: "EURUSD", side: "BUY", price: 1.0812, quantity: 100, broker: "A" },
    { id: 2, symbol: " eurusd ", side: "BUY", price: 1.0815, quantity: 200, broker: "B" },
    { id: 3, symbol: "EURUSD", side: "SELL", price: 1.0819, quantity: 300, broker: "C" },
    { id: 4, symbol: "EURUSD", side: "SELL", price: 1.0817, quantity: 400, broker: "D" }
  ]);

  assert.deepEqual(result, [{
    symbol: "EURUSD",
    bestBid: 1.0815,
    bestAsk: 1.0817,
    totalQuantity: 1000,
    messageCount: 4
  }]);
});

/* TODO 7: add at least one useful edge-case test */
