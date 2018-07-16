var CloneCostResult = 0
var CloneTimeResult = 0
var BabyMatureSpeedMultiplier = 0
var CharacterLevel = 0
const CloneElementCostPerLevelGlobalMultiplier = 5000 // fixed value from Cloning Chamber
const CloneBaseElementCostGlobalMultiplier = 2500 // fixed value from Cloning Chamber
const CloningTimePerElementShard = 7 // fixed value from Cloning Chamber

var requestURL = 'https://raw.githubusercontent.com/genie45/calculator/master/data.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function () {
  var creature = request.response
  createTable(creature)
}

function createTable (jsonObj) {
  var creaturename = jsonObj['name']
  var creatureCostPerLevel = jsonObj['CloneElementCostPerLevel']
  var creatureCost = jsonObj['CloneBaseElementCost']
  var tableRows = ''
  tableRows += '<tr><td colspan="2">BabyMatureSpeedMultiplier</td><td colspan="2"><input type="number" min"0.1" max="100" step= "0.1" value="1.0" id="BabyMatureSpeedMultiplier" onchange="startCalculate()"></td></tr>'
  tableRows += '<tr><td colspan="2">Level</td><td colspan="2"><input type="number" min="1" max="500" step="1" value="224" id="CharacterLevel" onchange="startCalculate()"></td></tr>'
  tableRows += '<tr><td colspan="2">CloneElementCostPerLevel</td><td colspan="2">' + creatureCostPerLevel + '</td></tr>'
  tableRows += '<tr><td colspan="2">CloneBaseElementCost</td><td colspan="2">' + creatureCost + '</td></tr>'
  tableRows += '<tr><td>Clone Cost</td><td>' + CloneCostResult + ' Element Shards</td><td>Clone Time</td><td>' + CloneTimeResult + ' seconds</td></tr>'
  var creatureSelect = '<select onchange="changeCreature(this.value)">'
  for (var c in creaturename) {
    creatureSelect += '<option' + (c === creaturename ? ' selected' : '') + '>' + c + '</option>'
  }
  creatureSelect += '</select>'
  tablearea.appendChild('<table class="wikitable">' + '<tr><th colspan="4">' + creatureSelect + tableRows + '</table>')
}

function startCalculate () {
  // Clone Cost
  var cost1 = 0
  var cost2 = 0
  var cost3 = 0
  cost1 = creatureCostPerLevel * CloneElementCostPerLevelGlobalMultiplier
  cost2 = cost1 * document.getElementById('CharacterLevel' + 'input').value
  cost3 = creatureCost * CloneBaseElementCostGlobalMultiplier
  CloneCostResult = Math.round(cost2 + cost3); console.log('CloneCostResult: ' + CloneCostResult)
  // Clone Time
  var time1 = 0
  time1 = CloningTimePerElementShard / document.getElementById('BabyMatureSpeedMultiplier' + 'input').value
  CloneTimeResult = Math.round(CloneCostResult * time1); console.log('CloneTimeResult: ' + CloneTimeResult)
}