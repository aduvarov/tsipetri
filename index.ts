let salary: number
salary = 500

interface UserData {
    isBirthdayData: boolean
    ageData: number
    userNameData: string
}

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}'
const userObj: UserData = JSON.parse(userData)
console.log(userObj.smt)

let isOkay = true
let movement: boolean | string = false

if (isOkay) {
    movement = 'moving'
}
