function Car() {

}

let car = new Car();
let car1 = new Car();

console.log(car.__proto__ == Car.prototype);  //true
console.log(car1.__proto__ == Car.prototype);  //true
console.log(car.__proto__ == car1.__proto__);  //true
