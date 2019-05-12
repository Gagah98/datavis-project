const climbingResults = require('../data/championsResults.json')

function compareNombres(a, b) {
  return a.country - b.country;
}


const leadWomen = climbingResults[0];
const leadMen = climbingResults[1];
const boulderingWomen = climbingResults[2];
const boulderingMen = climbingResults[3];
const speedWomen = climbingResults[4];
const speedMen = climbingResults[5];
console.log(leadWomen)

var chart = bb.generate({
  data: {
    json: {
      "leadWomen": leadWomen.map(r => r.points),
      "leadMen": leadMen.map(r => r.points),
      "boulderingWomen": boulderingWomen.map(r => r.points),
      "boulderingMen": boulderingMen.map(r => r.points),
      "speedWomen": speedWomen.map(r => r.points),
      "speedMen": speedMen.map(r => r.points),
    },
    type: "bar",
    groups: [
      [
        "leadWomen",
        "leadMen",
        "boulderingWomen",
        "boulderingMen",
        "speedWomen",
        "speedMen",
       
      ]
    ]
  },
  axis: {
    x: {
      type: "category",
      categories: leadWomen.map(r => r.country),
    },
    y: {
      label: {
        text: "Number of points",
        position: "outer-center"
      },
    },
  },
    bindto: "#resultsChart"
  });