function getNthFib(n) {
    // Write your code here.
    // What do I know?
    // the nth value is n - 1 + n - 2
    // n = 1 is 0
    // n = 2 is 1

    // The plan
    // Handle cases where n = 0 and n = 1
    // for all other cases, calculate up to n in fib sequence

    let fib = [0,1]

    if(n === 1) {
        return fib[0]
    } else if(n === 2) {
        return fib[1]
    } else {
        // calculate additional fib numbers until length of fib array - 1 = n
        for(let f = 2; fib.length - 1 !== n; f++) {
            let newFibNum = fib[f-2] + fib[f-1]
            fib.push(newFibNum)
        }
        return fib[n-1]
    }


}

describe('Get nth Fib function', ()=> {
    it('Returns 0 when n = 1', ()=> {
        expect(getNthFib(1)).toEqual(0)
    })
    it('Returns 1 when n = 2', ()=> {
        expect(getNthFib(2)).toEqual(1)
    })
    it('Returns 1 when n = 3', ()=> {
        expect(getNthFib(3)).toEqual(1)
    })
    it('Returns 2 when n = 4', ()=> {
        expect(getNthFib(4)).toEqual(2)
    })
    it('Returns 3 when n = 5', ()=> {
        expect(getNthFib(5)).toEqual(3)
    })
    it('Returns 5 when n = 6', ()=> {
        expect(getNthFib(6)).toEqual(5)

    })
    it('Returns 8 when n = 7', ()=> {
        expect(getNthFib(7)).toEqual(8)
    })

})