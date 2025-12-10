interface User {
    login: string
    password: string
    age: number
    // addr?: string
    addr: string | undefined
    parents?: {
        mother?: string
        father?: string
    }
}

const user: User = {
    login: 'anatoliy',
    password: '12345',
    age: 42,
    addr: 'street',
}

let dbName: string
sendUserData(user, 'evereasdf')

console.log(dbName!)

function sendUserData(obj: User, db?: string): void {
    dbName = '12345'
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase())
}
