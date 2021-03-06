describe('Roman Numerals', () => {

  const getNumeralsArray = numerals => {
    let regex = /IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M|/g
    return numerals.match(regex)
  }

  const isValidLength = numerals => numerals.length <= 15 ? true : false

  const onlyContainsNumerals = numerals => numerals.search(/[^IVXLCDM]/) > -1 ? false : true

  const isInGuaranteedRange = (number) => (number > 0) && (number < 4000) ? true : false

  const convertNumeralsToInt = numerals => {
    if(!isValidLength(numerals)) return 'invalid numeral'
    if(!onlyContainsNumerals(numerals)) return 'invalid numeral'

    let numeralsArray = getNumeralsArray(numerals)
    let intValue = getIntValue(numeralsArray)

    if(!isInGuaranteedRange(intValue)) return 'invalid range' 

    return intValue
  }

  const getIntValue = (numeralsArray) => {
    let number = 0
    for(let i of numeralsArray) {
      switch (i) {
        case 'I':
          number++
          break
        case 'V':
          number += 5
          break
        case 'X':
          number += 10
          break
        case 'L':
          number += 50
          break
        case 'C':
          number += 100
          break
        case 'D':
          number += 500
          break
        case 'M':
          number += 1000
          break
        case 'IV':
          number += 4
          break
        case 'IX':
          number += 9
          break
        case 'XL':
          number += 40
          break
        case 'XC':
          number += 90
          break
        case 'CD':
          number += 400
          break
        case 'CM':
          number += 900
          break
      }
    }
    return number
  }

  it('Converts numerals to array', ()=> {
    expect(getNumeralsArray('I')).toEqual(['I',''])
    expect(getNumeralsArray('II')).toEqual(['I','I',''])
    expect(getNumeralsArray('III')).toEqual(['I','I','I',''])
    expect(getNumeralsArray('IV')).toEqual(['IV',''])
    expect(getNumeralsArray('V')).toEqual(['V',''])
    expect(getNumeralsArray('VI')).toEqual(['V','I',''])
    expect(getNumeralsArray('VII')).toEqual(['V','I','I',''])
    expect(getNumeralsArray('VIII')).toEqual(['V','I','I','I',''])
    expect(getNumeralsArray('IX')).toEqual(['IX', ''])
    expect(getNumeralsArray('X')).toEqual(['X',''])
    expect(getNumeralsArray('XI')).toEqual(['X','I',''])
    expect(getNumeralsArray('XXXXIX')).toEqual(['X','X','X','X','IX',''])
    expect(getNumeralsArray('LVIII')).toEqual(['L','V','I','I','I',''])
    expect(getNumeralsArray('MCMXCIV')).toEqual(['M','CM','XC','IV',''])
  })

  it('Numeral length is <= 15', ()=> {
    expect(isValidLength('123456789')).toBe(true)
    expect(isValidLength('111111111111111')).toBe(true)
    expect(isValidLength('1111111111111111')).toBe(false  )
  })

  it('Only contains valid numerals', ()=> {
    expect(onlyContainsNumerals('bgI')).toBe(false)
    expect(onlyContainsNumerals('I')).toBe(true)
    expect(onlyContainsNumerals('IXV')).toBe(true)
    expect(onlyContainsNumerals('IXVk')).toBe(false)
  })
  

  it('Properly checks range', ()=> {
    expect(isInGuaranteedRange(0)).toBe(false)
    expect(isInGuaranteedRange(4000)).toBe(false)
    expect(isInGuaranteedRange(1)).toBe(true)
    expect(isInGuaranteedRange(3999)).toBe(true)
  })

  it('Properly adds numerals', ()=> {
    expect(getIntValue(['X','V'])).toBe(15)
  })

  it('Passes example 1', ()=> {
    expect(convertNumeralsToInt('III')).toBe(3)
  })
  it('Passes example 2', ()=> {
    expect(convertNumeralsToInt('LVIII')).toBe(58)
  })
  it('Passes example 3', ()=> {
    expect(convertNumeralsToInt('MCMXCIV')).toBe(1994)
  })


})

/*
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/