const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log(method)
}

const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET',
    // method: 'GET' as 'GET',
}

// const reqOptions = {
//     url: 'https://someurl.com',
//     method: 'GET',
// } as const

const method = 'GET'

fetchData('qqq', 'GET')
fetchData(reqOptions.url, method)

// fetchData(reqOptions.url, reqOptions.method)
// fetchData(reqOptions.url, <'GET'>reqOptions.method)
fetchData(reqOptions.url, reqOptions.method as 'GET')

const box = document.querySelector('.box') as HTMLElement
// const input = document.querySelector('input') as HTMLInputElement
const input = <HTMLInputElement>document.querySelector('input')
// const someNumber: number = +input.value
const someNumber: number = input.value as any as number
console.log('someNumber: ', someNumber)

let a = 'value' as const

let b = { f: 100 } as const
let c = [] as const

let value = 'value'
let arr = ['sd', 'dff']
let obj = { f: 100 }

// let T0 = value as const

let d = Math.round(Math.random() * 1) ? ('yes' as const) : ('no' as const)
