export type Side = "BUY" | "SELL";

export interface MarketMessage {
  id: number;
  symbol: string;
  side: Side | string;
  price: number;
  quantity: number;
  broker: string;
}

export interface QuoteSummary {
  symbol: string;
  bestBid: number | null;
  bestAsk: number | null;
  totalQuantity: number;
  messageCount: number;
}

export function normalizeMessage(message: MarketMessage): MarketMessage | null {
  // TODO 1
  return null;
}

export function buildSummary(messages: MarketMessage[]): QuoteSummary[] {
  // TODO 2
  return [];
}
