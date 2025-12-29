import { isClassOrTypeElement } from 'typescript'

interface ICompany {
    name: string
    debts: number
    departments: Department[]
    management: {
        owner: string
    }
}

interface Department {
    [key: string]: string
}

// let debts = 'debts' as 'debts'
let debts: 'debts' = 'debts'
type CompanyDebtsType = ICompany[typeof debts]

// type CompanyDebtsType = ICompany['debts']
type CompanyOwnerType = ICompany['management']['owner']
type CompanyDepartmentsType = ICompany['departments'][number]
type CompanyDepartmentsTypes = ICompany['departments']

type Test = ICompany[keyof ICompany]

type CompanyKeys = keyof ICompany
const keys: CompanyKeys = 'debts' // 'debts' или 'name'

function printDebts<T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`)
}

const google: ICompany = {
    name: 'Google',
    debts: 500000,
    departments: {
        sales: 'sales',
        developer: 'dev',
    },
    management: {
        owner: 'John Doe',
    },
}

printDebts(google, 'name', 'debts') // аргументы №2 и №3 строго ограничены свойствами

type GoogleKeys = keyof typeof google
const keys2: GoogleKeys = 'name'
