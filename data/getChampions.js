const R = require('ramda')
const data = require('./databases/leadMen.json')
const writeJson = require('./writeJson')

const getNation = R.path(['participants'])

const nations = getNation(data)

const filterData = feature => ({
    nation: R.prop(['nation'], feature),
    points: R.prop(['points'], feature),
  })

  const totalPointsByCountry = 

console.log(nations.map(filterData))

//filterData(nations)