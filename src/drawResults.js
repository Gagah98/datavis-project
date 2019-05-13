const R = require('ramda')
const DATA = require('../data/championsResults.json')




const sumBy = prop => vals => R.reduce(
  (current, val) => R.evolve({ [prop]: R.add(val[prop]) }, current),
  R.head(vals),
  R.tail(vals)
)
const groupSumBy = R.curry((groupOn, sumOn, vals) =>
  R.values(R.map(sumBy(sumOn))(R.groupBy(R.prop(groupOn), vals))))

  const compareNumbers = (a,b) => {
    return b.points - a.points
  }

const totalByCountry =  groupSumBy('country', 'points', R.flatten(DATA)).sort(compareNumbers).filter(c => c.points >= 200)


console.log(totalByCountry)



countries = totalByCountry.map(R.prop('country'))



categories =       [
  "leadWomen",
  "leadMen",
  "boulderingWomen",
  "boulderingMen",
  "speedWomen",
  "speedMen",
]


getPoints = (categoryIndex, country) => {
  const categoryData = R.path([categoryIndex], DATA)
  return Number(R.propOr(0, 'points', categoryData.find(R.propEq('country', country))))
}

DATA_FIXED = categories
  .reduce((result, category, categoryIndex) => ({
    ...result,
    [category]: countries.map(country => getPoints(categoryIndex, country)),
  }), {})


  var chart = bb.generate({
    data: {
    json: DATA_FIXED,
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
    ],
      
  },
  axis: {
    x: {
      type: "category",
      categories: countries,
      tick: {
        rotate: 75,
        multiline: false,
        tooltip: true
      },
      height: 130
    },
    y: {
      label: {
        text: "Number of points",
        position: "outer-center"
      },
    },
  },
bindto: resultsChart
})

getDataByCountry = country => categories.map((category, i) => ({
  category,
  points: Number(R.propOr(0, 'points', DATA[i].find(R.propEq('country', country)))) ,
}))



