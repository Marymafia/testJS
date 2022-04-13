const {removeChar} = require('../Remove.js')

describe('removeChar should return Remove First and Last Character', () =>{
  test('Remove First and Last Character',  () =>{
    expect(removeChar('String')).toEqual('trin')
  })
  test('Remove First and Last Character',  () =>{
    expect(removeChar('SOMETHING')).toEqual('OMETHIN')
  })
  test('Remove First and Last Character',  () =>{
    expect(removeChar('simbol')).toEqual('imbo')
  })
  test('Remove First and Last Character',  () =>{
    expect(removeChar('')).toEqual(undefined)
  })
  test('Remove First and Last Character',  () =>{
    expect(removeChar('mom')).toEqual('o')
  })
})

