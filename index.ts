function processingData<T>(data: T): T {
    // ...

    return data
}

const res1 = processingData(1)
let res2 = processingData('1')

const num = 100

const res3 = processingData<number>(num)
let res4 = processingData(num)

interface PrintUK {
    design: number
}

interface PrintES {
    design: string
}

interface Print<T> {
    design: T
}

const somePrint: Print<string> = {
    design: 'ten',
}

const someOtherPrint: Print<number> = {
    design: 10,
}
