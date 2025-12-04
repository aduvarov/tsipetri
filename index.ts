const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error',
    },
}

const createError = (msg: string) => {
    throw new Error(msg)
    // while (true) {}
}

function logBrtMsg({
    isBirthdayData,
    userNameData,
    ageData,
    messages: { error },
}: {
    isBirthdayData: boolean
    userNameData: string
    ageData: number
    messages: { error: string }
}): string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`
    } else {
        return createError(error)
    }
}

console.log(logBrtMsg(userData))

// const smth: never = undefined

const departments: string[] = ['dev', 'design', 'marketing']
const nums: number[] = [3, 5, 6]
const nums2: number[][] = [
    [3, 5, 6],
    [3, 5, 6],
]

const department = departments[0] // string
// departments.push(5)
const report = departments //
    .filter((d: string) => d !== 'dev') // лучше делать анотации вручную
    // .map(d => {
    //     // d string
    //     return 4
    // })// d number
    .map(d => `${d} - done`)

const [first] = report
console.log(first)
