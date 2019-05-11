const climbingRoutes = require('../data/climbingRoutes.json')

console.log(climbingRoutes)


climbingRoutes.sort((c1, c2) => c1.routes > c2.routes ? -1 : 1)

const bestRoutes = climbingRoutes.filter(c => c.routes > 1000)

bb.generate({
  title: {
    text: "Climbing Routes by country"
  },
  data: {
    json: {
      
      "Climbing Routes": bestRoutes.map(({ routes }) => routes),
      
    },
    type: 'bar', 
    
  },

  axis: {
    x: {
      type: "category",
      categories: bestRoutes.map(({ country }) => country),
      tick: {
        rotate: 75,
        multiline: false,
        tooltip: true
      },
      height: 130
    },
    y: {
      label: {
      text: "Number of routes",
      position: "outer-center"
      },
    },
  },
 
  
  bindto: chart
})