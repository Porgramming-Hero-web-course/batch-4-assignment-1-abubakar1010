class Car {
	constructor(public make: string, public car: string, public year: number) {}

	getCarAge(): number {
		return 2024 - this.year;
	}
}

const car = new Car("Honda", "Civic", 1918);
console.log(car.getCarAge())
