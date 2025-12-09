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

const dbName = '12345'

function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase())
}
