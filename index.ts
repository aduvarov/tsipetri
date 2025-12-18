function processingData<T, S>(data: T[], options: S): string {
    data.length
    switch (typeof data) {
        case 'string':
            return `${data}, speed: ${options}`
            break
        case 'number':
            return `${data}, speed: ${options}`
            break
        default:
            return 'Not valid'
    }
}

const res1 = processingData([1], 'fast')
let res2 = processingData(['1'], 'slow')

const num = 100
const res3 = processingData<number, string>([num], 'slow')

function processing<T>(data: T): T {
    return data
}

interface ProcessingFn {
    <T>(data: T): T
}

let newFunc: ProcessingFn = processing
interface DataSaver {
    processing: typeof processing
}

const saver: DataSaver = {
    // processing(data) {
    //     console.log(data)
    //     return data;
    // },
    processing: processing,
}
