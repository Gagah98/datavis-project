const R = require('ramda')
const data = [
  require('./databases/leadMen.json'),
  require('./databases/leadWomen.json'),
  require('./databases/boulderWomen.json'),
  require('./databases/boulderMen.json'),
  require('./databases/speedWomen.json'),
  require('./databases/speedMen.json')
]
const writeJson = require('./writeJson')

const getName = R.path(['cat', 'name'])


const getNation = R.path(['participants'])

const reduction =
    R.reduceBy((acc, next) => acc + Math.round(parseFloat(next.points)), 0, (x) => x.nation);

    const filterData = feature => ({
      nation: R.prop(['nation'], feature),
      points: R.prop(['points'], feature),
    })

const getResultByCountry = d => {
  const name = getName(d)
  const nations = getNation(d)
  const list = (nations.map(filterData))
  console.log(name)
  return reduction(list)
}



const championsResults = data.map(d =>({results:getResultByCountry(d), name:getName(d)}));

writeJson('championsResults.json', championsResults)



