const isBirthdayData: boolean = true
let ageData: number = 40
const userNameData: string = 'John'

const createError = (msg: string) => {
    throw new Error(msg)
    // while (true) {}
}

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`
    } else if (isBirthday === false) {
        return 'Too bad'
    }
    return createError('Error')
}

console.log(logBrtMsg(isBirthdayData, userNameData, ageData))

// const smth: never = undefined
