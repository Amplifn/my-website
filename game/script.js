const pointButton = document.querySelector("#pointButton");
const pointCount = document.querySelector("#pointCount");
const incrementButton = document.querySelector("#incrementButton");
const incrementCostText = document.querySelector("#incrementCostText");
const autoClickerButton = document.querySelector("#autoClickerButton");
const autoClickerText = document.querySelector("#autoClickerText");

let count = 0;
let countIncrement = 1;
let incrementCost = 10;
let autoClicksPerSecond = 0.5;
let autoClickCost = 30;

incrementButton.onclick = function() {
  if (count >= incrementCost) {
    countIncrement++;
    count -= incrementCost;
    incrementCost *= 1.25;
    update();
  }
};

pointButton.onclick = function() {
  count = count + countIncrement;
  update();
};

autoClickerButton.onclick = function() {
  if (count >= autoClickCost) {
    autoClicksPerSecond += 0.5;
    count -= autoClickCost;
    autoClickCost *= 1.5;
    update()
  }
};

function update() {
  incrementCost = Math.round(incrementCost);
  autoClickCost = Math.round(autoClickCost);
  pointCount.innerText = "Points: " + count;
  incrementButton.innerText = "Increment: " + countIncrement;
  incrementCostText.innerText = "Cost: " + incrementCost;
  autoClickerButton.innerText = "Clicks per second: " + autoClicksPerSecond;
  autoClickerText.innerText = "Cost: " + autoClickCost;
};

setInterval(function() {
    count += countIncrement;
    update()
  }, 1000 * (1 / autoClicksPerSecond));