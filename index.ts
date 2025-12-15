function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m))
    } else if (isNumber(msg)) {
        console.log(msg.toFixed())
    } else {
        console.log(msg)
    }

    console.log(msg) // union
}

printMsg(4)

// function isNumber(n: string[] | number | boolean): n is number {
//     return typeof n === 'number'
// }

function isNumber(n: unknown): n is number {
    return typeof n === 'number'
}

interface Car {
    engine: string
    wheels: {
        number: number
        type: string
    }
}

interface Ship {
    engine: string
    sail: string
}

function repairVehicle(vehicle: Car | Ship) {
    if (isCar(vehicle)) {
        console.log(vehicle.wheels)
    } else if (isShip(vehicle)) {
        console.log(vehicle.sail)
    } else {
        vehicle // never
    }
}

function isCar(car: Car | Ship): car is Car {
    // return 'wheels' in car
    return (car as Car).wheels.number !== undefined
}

function isShip(ship: Car | Ship): ship is Ship {
    return 'sail' in ship
}
