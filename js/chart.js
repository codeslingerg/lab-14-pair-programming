"use strict";

let canvasElem = document.getElementById("chart");

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

let days = ["Mon", "Tues", "Wed", "Thur", "Fri"];

let vote = document.getElementById("chart");
let votectx = document.getElementById("chart");

function renderChart() {
  const app = new AppState();
  console.log(app);
  app.loadItems();
}
let chart = new Chart(votectx, {
  type: "doughnut",
  data: {
    labels: days,
    datasets: [
      {
        label: "Vote Data",
        data: [1, 4, 5],
      },
    ],
  },
});

renderChart();
