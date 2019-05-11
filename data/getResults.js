const R = require('ramda')
const data = [
  require('./databases/leadWomen.json'),
  require('./databases/leadMen.json'),
  require('./databases/boulderWomen.json'),
  require('./databases/boulderMen.json'),
  require('./databases/speedWomen.json'),
  require('./databases/speedMen.json')
]
const writeJson = require('./writeJson')

const getName = R.path(['cat', 'name'])


const getNation = R.path(['participants'])

const sumBy = prop => vals => R.reduce(
    (current, val) => R.evolve({[prop]: R.add(val[prop])}, current),
    R.head(vals),
    R.tail(vals)
  )
  const groupSumBy = R.curry((groupOn, sumOn, vals) => 
  R.values(R.map(sumBy(sumOn))(R.groupBy(R.prop(groupOn), vals)))
  )
  

    const filterData = feature => ({
      country: R.prop(['nation'], feature),
      points: R.prop(['points'], feature),
    })

const getResultByCountry = d => {
  const nations = getNation(d)
  const list = (nations.map(filterData))
  return list;
}

const listFinal = data.map(getResultByCountry);



const championsResults = listFinal.map(d =>((groupSumBy('country', Math.round(parseFloat(d.points)), d))));

//writeJson('championsResults.json', championsResults)
championsResults.sort(r => r.country)

writeJson('test.json', championsResults)






