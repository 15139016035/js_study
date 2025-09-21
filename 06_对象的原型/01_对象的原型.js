function Car() {

}

let car = new Car();
let car1 = new Car();

console.log(car.__proto__ == Car.prototype);  //true
console.log(car1.__proto__ == Car.prototype);  //true
console.log(car.__proto__ == car1.__proto__);  //true


console.log("car对象：",car.__proto__);  //等于是在访问 Car函数对象的prototype
console.log("Car函数对象：",Car.__proto__);    //  等于是在访问Function函数对象的prototype
console.log("Function函数对象",Car.__proto__.__proto__);  //  等于是在访问Object函数对象的prototype
console.log("Object对象",Object.prototype); // 等于是在访问Object函数对象的


