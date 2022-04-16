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
