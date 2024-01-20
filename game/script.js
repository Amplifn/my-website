const pointButton = document.querySelector("#pointButton");
const pointCount = document.querySelector("#pointCount");
const incrementButton = document.querySelector("#incrementButton");
const incrementCostText = document.querySelector("#incrementCostText");
const autoClickerButton = document.querySelector("#autoClickerButton");
const autoClickerText = document.querySelector("#autoClickerText");
const criticalClickButton = document.querySelector("#criticalClickButton");
const criticalClickText = document.querySelector("#criticalClickCostText");

function debugMode(bool) {
  if (bool === true) {
    count = 10000;
    countIncrement = 1;
    incrementCost = 1;
    autoClicksPerSecond = 0;
    autoClickCost = 1;
    autoClickInterval;
    criticalClickChance = 100;
    criticalClickCost = 1;  
  }
}

let count = 0;
let countIncrement = 1;
let incrementCost = 10;
let autoClicksPerSecond = 0;
let autoClickCost = 30;
let autoClickInterval;
let criticalClickChance = 100;
let criticalClickCost = 200;

debugMode(false);


incrementButton.onclick = function() {
  if (count >= incrementCost) {
    countIncrement++;
    count -= incrementCost;
    incrementCost *= 1.25;
  };
  update();
};

pointButton.onclick = function() {
  if (randomNumber(1, criticalClickChance) == 1) {
    count += countIncrement * 100;
  } else {
    count += countIncrement;
  };
  update();
};

autoClickerButton.onclick = function() {
  if (count >= autoClickCost) {
    autoClicksPerSecond += 1;
    count -= autoClickCost;
    autoClickCost *= 1.5;
  };
  update();
};

criticalClickButton.onclick = function() {
  if (count >= criticalClickCost && criticalClickChance > 1) {
    count -= criticalClickCost;
    criticalClickChance /= 2;
    criticalClickCost *= 2;
  }
  update();
};

function update() {
  incrementCost = Math.round(incrementCost);
  autoClickCost = Math.round(autoClickCost);
  pointCount.innerText = "Points: " + count;
  incrementButton.innerText = "Increment: " + countIncrement;
  incrementCostText.innerText = "Cost: " + incrementCost;
  autoClickerButton.innerText = "Points per second: " + countIncrement * autoClicksPerSecond;
  autoClickerText.innerText = "Cost: " + autoClickCost;
  criticalClickButton.innerText = criticalClickChance < 1 ? "Critical click chance: 100%" : "Critical click chance: " + (1 / criticalClickChance * 100) + "%" ;
  criticalClickText.innerText = criticalClickChance < 1 ? "" : "Cost: " + criticalClickCost;
};

function autoClickIntervalFunc() {
  clearInterval(autoClickInterval);
  autoClickInterval = setInterval(function() {
    count += countIncrement * autoClicksPerSecond;
    update();
  }, 1000);
};

function randomNumber(x, y) {
  return Math.floor(x + (y - x + 1) * Math.random())
}

autoClickIntervalFunc()
