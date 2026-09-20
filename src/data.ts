import type { MarketMessage } from "./trades.js";

export const marketMessages: MarketMessage[] = [
  { id: 1, symbol: "EURUSD", side: "BUY", price: 1.0812, quantity: 2000000, broker: "Alpha" },
  { id: 2, symbol: "EURUSD", side: "SELL", price: 1.0818, quantity: 1000000, broker: "Beta" },
  { id: 3, symbol: " eurusd ", side: "BUY", price: 1.0815, quantity: 500000, broker: "Gamma" },
  { id: 4, symbol: "GBPUSD", side: "SELL", price: 1.2695, quantity: 1500000, broker: "Alpha" },
  { id: 5, symbol: "GBPUSD", side: "BUY", price: 1.2687, quantity: 750000, broker: "Beta" },
  { id: 6, symbol: "", side: "BUY", price: 1.20, quantity: 100000, broker: "BrokenBroker" },
  { id: 7, symbol: "USDJPY", side: "BUY", price: -10, quantity: 500000, broker: "BrokenBroker" },
  { id: 8, symbol: "USDJPY", side: "SELL", price: 148.42, quantity: 2500000, broker: "Gamma" }
];
