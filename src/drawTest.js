const climbingResults = require('../data/championsResults.json')

var chart = bb.generate({
  data: {
    json: {
      "AUT": climbingResults.find(n => n.country == "AUT").points,
    },
    type: "bar",
    groups: [
      [
        "AUT"
       
      ]
    ]
  },
  axis: {
    x: {
      type: "category",
      categories: climbingResults.map(r => r.country),
    },
    y: {
      label: {
        text: "Number of points",
        position: "outer-center"
      },
    },
  },
    bindto: "#testChart"
  });