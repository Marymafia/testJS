const { repeatStr} = require('../Stringrepeat.js')

describe('repeatStr should return repeat string a few times', () =>{
  test('repeat string a few times',  () =>{
    expect( repeatStr(3,'o')).toEqual('ooo')
  })
  test('repeat string a few times',  () =>{
    expect( repeatStr(2,'arr')).toEqual('arrarr')
  })
  test('repeat string a few times',  () =>{
    expect( repeatStr(2,'')).toEqual('')
  })
  test('repeat string a few times',  () =>{
    expect( repeatStr(4,'2')).toEqual('2222')
  })
  test('repeat string a few times',  () =>{
    expect( repeatStr(5,'I')).toEqual('IIIII')
  })
})
