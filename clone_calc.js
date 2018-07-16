(function () {
    
const CloneElementCostPerLevelGlobalMultiplier = 5000; // fixed value from Cloning Chamber
const CloneBaseElementCostGlobalMultiplier = 2500; // fixed value from Cloning Chamber
const CloningTimePerElementShard = 7; // fixed value from Cloning Chamber

var creatureSelect = document.getElementById('creature-select');
var babyMatureSpeedMultiplier = document.getElementById('baby-mature-speed-multiplier');
var characterLevel = document.getElementById('character-level');
var costPerLevelElement = document.getElementById('cost-per-level');
var baseCostElement = document.getElementById('base-cost');
var cloneCostElement = document.getElementById('clone-cost');
var cloneTimeElement = document.getElementById('clone-time');

var creatures;

var requestURL = 'data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  creatures = request.response;
  createSelect(creatures.map(function (creature) { return creature.name;}));
  document.getElementById('baby-mature-speed-multiplier').addEventListener('input', calculate);
  document.getElementById('character-level').addEventListener('input', calculate);
}

function createSelect(creatureNames) {
    creatureNames.forEach(function (name) {
        var option = document.createElement('option');
        option.innerText = name;
        option.value = name;
        creatureSelect.appendChild(option);
    });
    creatureSelect.addEventListener('change', calculate);
}

function calculate() {
    var creatureName = creatureSelect.options[creatureSelect.selectedIndex].value;
    var creature = creatures.find(function (creature) { return creature.name == creatureName; });
    // Clone Cost
    var costPerLevel = creature.CloneElementCostPerLevel * CloneElementCostPerLevelGlobalMultiplier;
    var costForLevel = costPerLevel * (parseFloat(characterLevel.value) || 0);
    var baseCost = creature.CloneBaseElementCost * CloneBaseElementCostGlobalMultiplier;

    var cloneCost = costForLevel + baseCost;

    var time = CloningTimePerElementShard / (parseFloat(babyMatureSpeedMultiplier.value) || 1);
    var cloneTime = cloneCost * time;

    // console.log('CloneCostResult: ' + cloneCost);
    // console.log('CloneTimeResult: ' + cloneTime);
    
    costPerLevelElement.innerText = Math.round(costPerLevel);
    baseCostElement.innerText = Math.round(baseCost);
    cloneCostElement.innerText = Math.round(cloneCost);
    cloneTimeElement.innerText = Math.round(cloneTime);
}

})();
