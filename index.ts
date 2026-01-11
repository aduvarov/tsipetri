interface IEngine {
    model: string
    capacity: number
    startEngine: (time: Date) => string
}

abstract class AbstractVehicle {
    model: string
    capacity: number
    abstract startEngine: (time: Date) => string
    stopEngine(time: Date): string {
        return 'Engine Stopped'
    }
}

class Vehicle extends AbstractVehicle {
    startEngine = (time: Date) => {
        return 'Started'
    }
}

console.log(new Vehicle().startEngine(new Date()))
