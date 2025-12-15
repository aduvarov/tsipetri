// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

interface IAnimal {
    animal: 'cat' | 'dog' | 'bird'
    breed: string
    sterilized?: string
}

interface ISucessData extends IAnimal {
    location: string
    age?: number
}

interface IFailData {
    message: string
    nextUpdateIn: Date
}
interface ISuccessResponse {
    status: 'available'
    data: ISucessData
}

interface IFailResponse {
    status: 'not available'
    data: IFailData
}

function isAvailable(response: ISuccessResponse | IFailResponse): response is ISuccessResponse {
    return 'location' in response.data
}

const r1: ISuccessResponse = {
    status: 'available',
    data: {
        animal: 'cat',
        breed: 'britan',
        sterilized: 'yes',
        location: 'n8',
        age: 3,
    },
}

const r2: IFailResponse = {
    status: 'not available',
    data: {
        message: 'Not found',
        nextUpdateIn: new Date(),
    },
}

function checkAnimalData(animal: ISuccessResponse | IFailResponse) {
    if (isAvailable(animal)) {
        // Заменить условие!
        return animal.data
    } else {
        return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`
    }
}

console.log(checkAnimalData(r1))
console.log(checkAnimalData(r2))
