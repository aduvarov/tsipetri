let num: Number = new Number(5)
let num2: number = 5
let num3: number = Number(5)

// num = num2
// num2 = num

const num5 = 5
const strNum: string = num5.toString()
const str = '5'
const numStr: number = +str

interface Department {
    name: string
    budget: number
}

const department = {
    name: 'web-dev',
    budget: 50000,
}

interface Project {
    name: string
    projectBudget: number
}

function transformDepartment(department: Department, amount: number): Project {
    return {
        name: department.name,
        projectBudget: amount,
    }
}

const mainProject: Project = transformDepartment(department, 4000)
