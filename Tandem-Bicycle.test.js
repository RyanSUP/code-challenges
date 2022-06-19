function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {

    redShirtSpeeds.sort((a,b) => a - b)
    blueShirtSpeeds.sort((a,b) => a - b)

    let totalSpeed = 0

    if(fastest) redShirtSpeeds.reverse()

    for(let i = 0; i < redShirtSpeeds.length; i++) {
        totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }

    return totalSpeed;
}
  
describe('Tandem-Bycycle', ()=> {

    
    test('if input arrays are the same length', ()=> {
        let simpleRed = [2]
        let simpleBlue = [1]
        expect((simpleRed.length === simpleBlue.length)).toBeTruthy()
    })

    it('should return 2', ()=> {
        let simpleRed = [2]
        let simpleBlue = [1]
        expect(tandemBicycle(simpleRed, simpleBlue, true)).toBe(2)
    })
    // max
    it('should return 2', ()=> {
        let simpleRed = [2]
        let simpleBlue = [1]
        expect(tandemBicycle(simpleRed, simpleBlue, false)).toBe(2)
    })
    
    it('should return 9', ()=> {
        let redShirts = [1,3]
        let blueShirts = [4,5]
        expect(tandemBicycle(redShirts, blueShirts, true)).toBe(9)
    })

    it('should return 32', ()=> {
        let redShirts = [5, 5, 3, 9, 2]
        let blueShirts = [3, 6, 7, 2, 1]
        expect(tandemBicycle(redShirts, blueShirts, true)).toBe(32)
    })

})
  