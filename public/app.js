const body = document.querySelector("#summaryBody");
const filterInput = document.querySelector("#symbolFilter");
const status = document.querySelector("#status");
const error = document.querySelector("#error");

let summaries = [];

async function loadSummary() {
  try {
    status.textContent = "Loading...";
    error.textContent = "";

    const response = await fetch("/api/summary");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    summaries = await response.json();

    status.textContent = "";
    renderSummary();
  } catch (err) {
    status.textContent = "";
    error.textContent = "Failed to load market summary.";
    console.error(err);
  }
}

function renderSummary() {
  const filterValue = filterInput.value.trim().toUpperCase();

  const filteredSummaries = summaries.filter((summary) =>
    summary.symbol.includes(filterValue)
  );

  body.innerHTML = filteredSummaries
    .map((summary) => {
      const bestBid =
        summary.bestBid === null ? "-" : summary.bestBid;

      const bestAsk =
        summary.bestAsk === null ? "-" : summary.bestAsk;

      return `
        <tr>
          <td>${summary.symbol}</td>
          <td>${bestBid}</td>
          <td>${bestAsk}</td>
          <td>${summary.totalQuantity}</td>
          <td>${summary.messageCount}</td>
        </tr>
      `;
    })
    .join("");
}

filterInput.addEventListener("input", renderSummary);

loadSummary();