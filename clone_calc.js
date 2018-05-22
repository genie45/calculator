const CloneElementCostPerLevelGlobalMultiplier = 5000; //fixed value from Cloning Chamber
const CloneBaseElementCostGlobalMultiplier = 2500; //fixed value from Cloning Chamber

var CloningTimePerElementShard = 7; //fixed value from Cloning Chamber
var CloneCostResult = 0;
var CloneTimeResult = 0;
var CloneValuesDiv = null;
var CreatureStats = null;
var CloneValues ={
    'CloneElementCostPerLevel': 'CloneElementCostPerLevel',
    'CloneBaseElementCost': 'CloneBaseElementCost',
};

if (CloneValuesDiv = document.getElementById('CloneCalc')){
    CreatureStats = {
        "Achatina": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.69,
        },
        "Allosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.53,
        },
        "Anglerfish": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.17,
        },
        "Ankylosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.93,
        },
        "Araneo": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.04,
        },
        "Archaeopteryx": {
            "CloneElementCostPerLevel": 0.007,
            "CloneBaseElementCost": 0.13,
        },
        "Argentavis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.68,
        },
        "Arthropluera": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.2,
        },
        "Baryonyx": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.52,
        },
        "Basilosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.75,
        },
        "Beelzebufo": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.57,
        },
        "Brontosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.79,
        },
        "Carbonemys": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.64,
        },
        "Carnotaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.26,
        },
        "Castoroides": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.84,
        },
        "Chalicotherium": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.27,
        },
        "Compy": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.07,
        },
        "Daeodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.67,
        },
        "Dilophosaur": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.12,
        },
        "Dimetrodon": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.08,
        },
        "Dimorphodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.28,
        },
        "Diplocaulus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.4,
        },
        "Diplodocus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.23,
        },
        "Direbear": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.66,
        },
        "Direwolf": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.58,
        },
        "Dodo": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.01,
        },
        "Doedicurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.83,
        },
        "Dung Beetle": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.9,
        },
        "Dunkleosteus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.43,
        },
        "Electrophorus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.13,
        },
        "Equus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.44,
        },
        "Gallimimus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.35,
        },
        "Giganotosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.99,
        },
        /*"Gigantopithecus": {
            "CloneElementCostPerLevel": ,
            "CloneBaseElementCost": ,
        }, has no values for cloning calculation */
        "Griffin": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.68,
        },
        "Hesperornis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.25,
        },
        "Hyaenodon ": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.035,
        },
        "Ichthyornis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.3,
        },
        "Ichthy": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.66,
        },
        "Iguanodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.32,
        },
        "Kairuku": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.41,
        },
        "Kaprosuchus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.4,
        },
        "Kentrosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.37,
        },
        "Lystrosaurus": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.33,
        },
        "Mammoth": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.62,
        },
        "Manta": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.21,
        },
        "Megalania": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.85,
        },
        "Megaloceros": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.36,
        },
        "Megalodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.37,
        },
        "Megalosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.34,
        },
        "Megatherium": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.67,
        },
        "Mesopithecus": {
            "CloneElementCostPerLevel": 0.005,
            "CloneBaseElementCost": 0.23,
        },
        "Microraptor": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.34,
        },
        "Mosasaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.88,
        },
        "Moschops": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.5,
        },
        "Onyc": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.02,
        },
        "Otter": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.84,
        },
        "Oviraptor": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.6,
        },
        "Ovis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.79,
        },
        "Pachycephalosaurus": {
            "CloneElementCostPerLevel": 0.008,
            "CloneBaseElementCost": 0.12,
        },
        "Pachyrhinosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.2,
        },
        "Paracer": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.66,
        },
        "Parasaur": {
            "CloneElementCostPerLevel": 0.007,
            "CloneBaseElementCost": 0.14,
        },
        "Pegomastax": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.28,
        },
        "Pelagornis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.43,
        },
        "Phiomia": {
            "CloneElementCostPerLevel": 0.008,
            "CloneBaseElementCost": 0.47,
        },
        "Plesiosaur": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.42,
        },
        "Procoptodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.31,
        },
        "Pteranodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.79,
        },
        "Pulmonoscorpius": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.32,
        },
        "Purlovia": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.32,
        },
        "Quetzal": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.98,
        },
        "Raptor": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.23,
        },
        "Rex": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.87,
        },
        "Sabertooth": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.48,
        },
        "Sarco": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.22,
        },
        "Spinosaur": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.67,
        },
        "Stegosaurus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.29,
        },
        "Tapejara": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.67,
        },
        "Terror Bird": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.36,
        },
        "Therizinosaur": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.94,
        },
        /*"Thylacoleo": {
            "CloneElementCostPerLevel": ,
            "CloneBaseElementCost": ,
        },is missing the values for cloning*/
        "Triceratops": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.23,
        },
        "Troodon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.32,
        },
        "Tusoteuthis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.87,
        },
        "Unicorn": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.44,
        },
        "Woolly Rhino": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.39,
        },
        "Yutyrannus": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.94,
        },
        "Fire Wyvern": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.82,
        },
        "Jerboa": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.51,
        },
        "Lightning Wyvern": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.82,
        },
        "Lymantria": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.15,
        },
        "Mantis": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.79,
        },
        "Morellatops": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.35,
        },
        "Phoenix": {
            "CloneElementCostPerLevel": 0.04,
            "CloneBaseElementCost": 0.82,
        },
        "Poison Wyvern": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.82,
        },
        "Rock Elemental": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.88,
        },
        "Thorny Dragon": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.48,
        },
        "Vulture": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.32,
        },
        "Basilisk": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.78,
        },
        "Karkinos": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.5,
        },
        "Ravager": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.25,
        },
        "Reaper": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.93,
        },
        "Rock Drake": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.82,
        },
        "Roll Rat": {
            "CloneElementCostPerLevel": 0.01,
            "CloneBaseElementCost": 0.45,
        },
    }
}

changeCreature(CloneValuesDiv.innerHTML);

function changeCreature(creature) {
    if (CreatureStats[creature] == null)
        creature = Object.keys(CreatureStats)[0];
}



/*
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
}*/