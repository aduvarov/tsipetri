type voidFunc = () => void

const retString: voidFunc = () => {
    // ... some login
    return 'string'
}

const s = retString()
console.log('s: ', s)

const retNum: voidFunc = () => {
    // ... some logic
    return 5
}

const n = retNum()
console.log('n: ', n)

function f2(): void {
    return true
}

const f3 = function (): void {
    return false
}

const names = ['Anna', 'John']
const newArr = names.slice()

names.forEach((name, i, arr) => arr.push('Hey!'))
