const pointButton = document.querySelector("#pointButton");
const pointCount = document.querySelector("#pointCount");
const incrementButton = document.querySelector("#incrementButton");
const incrementCostText = document.querySelector("#incrementCostText");
const autoClickerButton = document.querySelector("#autoClickerButton");
const autoClickerText = document.querySelector("#autoClickerText");

let count = 0;
let countIncrement = 1;
let incrementCost = 10;
let autoClicksPerSecond = 0;
let autoClickCost = 30;
let autoClickInterval;

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
    autoClicksPerSecond += 1;
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
  autoClickerButton.innerText = "Points per second: " + countIncrement * autoClicksPerSecond;
  autoClickerText.innerText = "Cost: " + autoClickCost;
};

function autoClickIntervalFunc() {
  clearInterval(autoClickInterval);
  autoClickInterval = setInterval(function() {
    count += countIncrement * autoClicksPerSecond;
    update();
  }, 1000);
};

autoClickIntervalFunc()
