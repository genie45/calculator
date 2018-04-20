const CloneElementCostPerLevelGlobalMultiplier = 5000;
const CloneBaseElementCostGlobalMultiplier = 2500;

var CloneCostResult = 0;
var CloneTimeResult = 0;

function StartCalculate() {
    var CharacterLevel = document.getElementById("CharacterLevel"); console.log('CharacterLevel: ' + CharacterLevel);
    var CloneElementCostPerLevel = document.getElementById("CloneElementCostPerLevel"); console.log('CloneElementCostPerLevel: ' + CloneElementCostPerLevel);
    var CloneBaseElementCost = document.getElementById("CloneBaseElementCost"); console.log('CloneBaseElementCost: ' + CloneBaseElementCost);
    var CloneTimePerElementShard = document.getElementById("CloneTimePerElementShard"); console.log('CloneTimePerElementShard: ' + CloneTimePerElementShard);
    var BabyMatureSpeedMultiplier = document.getElementById("BabyMatureSpeedMultiplier"); console.log('BabyMatureSpeedMultiplier: ' + BabyMatureSpeedMultiplier);
    var x = CloneElementCostPerLevel * CloneElementCostPerLevelGlobalMultiplier; console.log('firststep: ' + x);
    var y = x * CharacterLevel; console.log('second step: ' + y);
    var z = CloneBaseElementCostGlobalMultiplier * CloneBaseElementCost; console.log('third step: ' + z);
    CloneCostResult = Math.round(y + z); console.log('CloneCostResult: ' + CloneCostResult);
    var a = CloneTimePerElementShard / BabyMatureSpeedMultiplier; console.log('fourth step: ' + a);
    CloneTimeResult = CloneCostResult * a; console.log('CloneTimeResult: ' + CloneTimeResult);
    document.getElementById("CloneCostResult").innerHTML = CloneCostResult;
    document.getElementById("CloneTimeResult").innerHTML = CloneTimeResult;
}