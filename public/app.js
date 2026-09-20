const body = document.querySelector("#summaryBody");
const filterInput = document.querySelector("#symbolFilter");
const status = document.querySelector("#status");
const error = document.querySelector("#error");

let summaries = [];

async function loadSummary() {
  // TODO 5: fetch /api/summary, loading/error states, then render
}

function renderSummary() {
  // TODO 6: client-side case-insensitive filter and table rendering
  // Display "-" when bestBid or bestAsk is null.
}

filterInput.addEventListener("input", renderSummary);
loadSummary();
