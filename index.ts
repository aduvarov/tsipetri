interface ICompany {
    name: string
    debts: number
}

type CompanyKeys = keyof ICompany
const keys: CompanyKeys = 'debts' // 'debts' или 'name'

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`)
}

const google: ICompany = {
    name: 'Google',
    debts: 500000,
}

printDebts(google, 'name', 'debts') // аргументы №2 и №3 строго ограничены свойствами

type GoogleKeys = keyof typeof google
const keys2: GoogleKeys = 'name'
