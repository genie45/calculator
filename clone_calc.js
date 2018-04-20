const CloneElementCostPerLevelGlobalMultiplier = 5000;
const CloneBaseElementCostGlobalMultiplier = 2500;

var CharacterLevel = document.getElementById("CharacterLevel");
var CloneElementCostPerLevel = document.getElementById("CloneElementCostPerLevel");
var CloneBaseElementCost = document.getElementById("CloneBaseElementCost");
var CloneTimePerElementShard = document.getElementById("CloneTimePerElementShard");
var BabyMatureSpeedMultiplier = document.getElementById("BabyMatureSpeedMultiplier");
var CloneCostResult = 0;
var CloneTimeResult = 0;

function StartCalculate() {
    var x = CloneElementCostPerLevel * CloneElementCostPerLevelGlobalMultiplier; console.log(x);
    var y = x * CharacterLevel; console.log(y);
    var z = CloneBaseElementCostGlobalMultiplier * CloneBaseElementCost; console.log(z);
    CloneCostResult = Math.round(y + z); console.log(CloneCostResult);
    var a = CloneTimePerElementShard / BabyMatureSpeedMultiplier; console.log(a);
    CloneTimeResult = CloneCostResult * a; console.log(CloneTimeResult);
    document.getElementById("CloneCostResult").innerHTML = CloneCostResult;
    document.getElementById("CloneTimeResult").innerHTML = CloneTimeResult;
}