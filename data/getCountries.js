const R = require('ramda')
const data = require('./databases/crag.json')
const writeJson = require('./writeJson')

const getContinents = R.path(['data', 'visible', 0, 'children'])

const continents = getContinents(data)

const getPays = R.prop('children')

const pays = R.flatten(continents.map(getPays))

const filterAustralia = region => ({

})

const reduction = R.reduceBy((acc, next) => acc + (next.numberRoutes), 0, (x) => x.country == "Victoria" && "Western Australia");



//console.log(pays)

const filterCountries = feature => ({
    country: R.prop(['name'], feature),
    ascents: R.prop(['numberAscents'], feature),
    routes: R.prop(['numberRoutes'], feature),
    gearStyles: R.prop(['gearStyles'], feature)
  })

  const list = pays.map(filterCountries);

  const australia = reduction(list);

  //writeJson('climbingRoutes.json', list)

  writeJson('australia.json', australia)