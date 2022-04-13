
const {positiveSum} = require('../sum.js')

describe('positiveSum should return sum of positive numbers', () =>{
  test(' sum of positive numbers',  () =>{
    expect(positiveSum([2,-1,3,-2])).toEqual(5)
  })
  test(' sum of positive numbers',  () =>{
    expect(positiveSum([])).toEqual(0)
  })

})

