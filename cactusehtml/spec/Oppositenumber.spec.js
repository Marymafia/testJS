
const {opposite} = require('../Oppositenumber.js')

describe('opposite should return opposite number', () =>{
  test(' positive numbers',  () =>{
    expect(opposite(6)).toBe(-6)
  })
  test('negative numbers ',  () =>{
    expect(opposite(-10)).toBe(10)
  })
  test(' sum of positive numbers',  () =>{
    expect(opposite()).toBe(undefined)
  })
  test(' positive numbers',  () =>{
    expect(opposite(3.5)).toBe(-3.5)
  })
  test(' negative numbers ',  () =>{
    expect(opposite(-5.2)).toBe(5.2)
  })
})
