interface User {
    readonly login: string
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

const userFreeze: Readonly<User> = {
    login: 'anatoliy',
    password: '12345',
    age: 42,
    addr: 'street',
}

// userFreeze.age = 44

// user.login = 'asdf' //error

const dbName = '12345'

function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase())
}

// const basicPorts: readonly number[] = [3000, 3001, 5555]
// // basicPorts[0] = 5 // error

// const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555']
// // basicPorts[0] = 5 // error

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555]
// basicPorts[0] = 5 // error
