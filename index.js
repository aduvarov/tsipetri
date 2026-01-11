"use strict";
class AbstractVehicle {
    stopEngine(time) {
        return 'Engine Stopped';
    }
}
class Vehicle extends AbstractVehicle {
    constructor() {
        super(...arguments);
        this.startEngine = (time) => {
            return 'Started';
        };
    }
}
console.log(new Vehicle().startEngine(new Date()));
