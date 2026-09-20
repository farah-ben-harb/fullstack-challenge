# 60-Minute Full-Stack Coding Challenge

## Context
You are working on a trading workflow application. Broker messages arrive as market quotes.
The product must clean incoming data, aggregate it, expose it through an API, and display it in a compact UI.

## Time limit
60 minutes.

## Tasks

### Backend domain logic
Complete `normalizeMessage()`:
- non-empty symbol
- side must be BUY or SELL
- side input may be lowercase, normalize to uppercase
- price > 0
- quantity > 0
- trim + uppercase symbol
- do not mutate input
- invalid => null

Complete `buildSummary()`:
- bestBid = highest BUY price
- bestAsk = lowest SELL price
- totalQuantity = total valid quantity
- messageCount = number of valid messages
- invalid messages ignored
- alphabetical symbol sort

### API
Complete `GET /api/messages`:
- only valid normalized messages
- optional `?symbol=eurusd`
- case-insensitive filter

Complete `GET /api/summary`.

### Frontend
Complete `public/app.js`:
- fetch `/api/summary`
- render table
- client-side case-insensitive symbol filter
- "-" for missing bid/ask
- loading state
- error state

### Tests
Make existing tests pass and add at least one edge-case test.

### Git
Use small meaningful commits.

Suggested commits:
- feat: implement market message normalization
- feat: add quote aggregation
- feat: complete market data API
- feat: render quote summary
- test: cover quote edge cases

## Commands

```bash
npm install
npm test
npm run typecheck
npm run dev
```

Open: http://localhost:3000

API:
- http://localhost:3000/api/messages
- http://localhost:3000/api/messages?symbol=eurusd
- http://localhost:3000/api/summary

## Suggested timing
- 0-5 min: inspect, run, read tests
- 5-20 min: normalization + aggregation
- 20-32 min: API
- 32-45 min: frontend
- 45-52 min: tests + edge cases
- 52-57 min: refactor/typecheck
- 57-60 min: final test, commit, push

## Evaluation
Correctness, decomposition, clean code, API reasoning, frontend integration, tests, error handling, Git workflow, and your ability to explain decisions.
