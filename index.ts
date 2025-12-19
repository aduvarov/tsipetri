// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<TGame, THours> {
    game: TGame
    hours: THours
    server: string
}

const player1: PlayerData<string, number> = {
    game: 'CS:GO',
    hours: 300,
    server: 'basic',
}

const player2: PlayerData<number, string> = {
    game: 2048,
    hours: '300 h.',
    server: 'arcade',
}

const player3: PlayerData<string, { total: number; inMenu: number }> = {
    game: 'Chess',
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: 'chess',
}

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
    squares: number
    circles: number
    triangles: number
    others: number
}

function calculateAmountOfFigures<T extends Figure>(figure: T[]): AmountOfFigures {
    const result: AmountOfFigures = {
        squares: figure.filter(el => el.name === 'rect').length,
        circles: figure.filter(el => el.name === 'circle').length,
        triangles: figure.filter(el => el.name === 'triangle').length,
        others: 0,
    }
    result.others = figure.length - result.squares - result.circles - result.triangles
    return result
}

interface Figure {
    name: 'rect' | 'circle' | 'triangle' | 'line'
    data?: object
}

const x: Figure = {
    name: 'rect',
    data: { a: 5, b: 10 },
}

const data: Figure[] = [
    {
        name: 'rect',
        data: { a: 5, b: 10 },
    },
    {
        name: 'rect',
        data: { a: 6, b: 11 },
    },
    {
        name: 'triangle',
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: 'line',
        data: { l: 15 },
    },
    {
        name: 'circle',
        data: { r: 10 },
    },
    {
        name: 'circle',
        data: { r: 5 },
    },
    {
        name: 'rect',
        data: { a: 15, b: 7 },
    },
    {
        name: 'triangle',
    },
]

console.log(calculateAmountOfFigures(data))
