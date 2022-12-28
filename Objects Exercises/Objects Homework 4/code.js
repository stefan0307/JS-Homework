const car = {
    model: 'Suzuki Vitara',
    color: 'Black',
    year: 2017,
    fuel: 'Petrol',
    fuelConsumption: 10,
    calculateFuelNeeded: function (distanceKm) {
        let fuelConsumption100km = this.fuelConsumption / 100;
        let fuelNeeded = fuelConsumption100km * distanceKm;
        return `To pass ${distanceKm}km you need ${fuelNeeded} liters of ${this.fuel}`;
    }
}

console.log(car.calculateFuelNeeded(50));