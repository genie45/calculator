var stats = null;
var wildStatCalcDiv = null;
var CloneCostResult = 0;
var CloneTimeResult = 0;
var BabyMatureSpeedMultiplier = 0;
var CharacterLevel = 0;
const CloneElementCostPerLevelGlobalMultiplier = 5000; //fixed value from Cloning Chamber
const CloneBaseElementCostGlobalMultiplier = 2500; //fixed value from Cloning Chamber
const CloningTimePerElementShard = 7; //fixed value from Cloning Chamber


function changeCreature(creature) {
    if (CloningValuesDinos[creature] == null) {
        creature = Object.keys(CloningValuesDinos);
    }
    stats = CloningValuesDinos[creature];
    var tableRows = '';
    tableRows += '<tr><td colspan="2">BabyMatureSpeedMultiplier</td><td colspan="2"><input type="number" min"0.1" max="100" step= "0.1" value="1.0" id="BabyMatureSpeedMultiplier" onchange="startCalculate()"></td></tr>';
    tableRows += '<tr><td colspan="2">Level</td><td colspan="2"><input type="number" min="1" max="500" step="1" value="224" id="CharacterLevel" onchange="startCalculate()"></td></tr>';
    tableRows += '<tr><td colspan="2">CloneElementCostPerLevel</td><td colspan="2">' + creature[0] + '</td></tr>';
    tableRows += '<tr><td colspan="2">CloneBaseElementCost</td><td colspan="2">' + creature[1] + '</td></tr>';
    tableRows += '<tr><td>Clone Cost</td><td>' + CloneCostResult + ' Element Shards</td><td>Clone Time</td><td>' + CloneTimeResult + ' seconds</td></tr>'
    var creatureSelect = '<select onchange="changeCreature(this.value)">';
    for (var c in CloningValuesDinos) {
        creatureSelect += '<option' + (c === creature ? ' selected' : '') + '>' + c + '</option>';
    }
    creatureSelect += '</select>';
    wildStatCalcDiv.innerHTML = '<table class="wikitable">' +
      '<tr><th colspan="4">' + creatureSelect + 
      tableRows +
      '</table>';
    startCalculate();
}

function startCalculate() {
    //Clone Cost
    var cost1 = 0;
    var cost2 = 0;
    var cost3 = 0;
    cost1 = creature[0] * CloneElementCostPerLevelGlobalMultiplier;
    cost2 = cost1 * document.getElementById('CharacterLevel'+ 'input').value;
    cost3 = creature[1] * CloneBaseElementCostGlobalMultiplier;
    CloneCostResult = Math.round(cost2 + cost3); console.log('CloneCostResult: ' + CloneCostResult);
    //Clone Time
    var time1 = 0;
    time1 = CloningTimePerElementShard / document.getElementById('BabyMatureSpeedMultiplier' + 'input').value;
    CloneTimeResult = Math.round(CloneCostResult * time1); console.log('CloneTimeResult: ' + CloneTimeResult);
}