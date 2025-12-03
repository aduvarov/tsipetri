let salary
salary = 5000 // any

const userData = '{"isBirthdayData": true, "ageData":40, "userNameData": "John"}'

const userObj: {
    isBirthdayData: boolean
    userNameData: string
    ageData: number
} = JSON.parse(userData)

console.log(userObj.smt())

const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`
    } else {
        return 'Error'
    }
}

console.log(logBrtMsg(isBirthdayData, userNameData, ageData))
