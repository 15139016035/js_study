/**
 * 通过一个案例来区分 __proto__ , prototype , constructor 的关系
 */

function Person(name) {
    this.name = name;
}

const person1 = new Person('Alice');

/**
 *  每个实例对象的__proto__ 指向 它的原型即 它的构造函数的prototype
 */
console.log(person1.__proto__ === Person.prototype);   //打印：true

/**
 * constructor目的就是为了方便的知道 当前实例对象是通过哪个构造函数创建的
 */

console.log(person1.__proto__.constructor ===Person); //打印true


/**
 * javaScript中 所有的函数都是由 Function构造出来的
 */
console.log(Person.__proto__.constructor) //打印 [Function: Function]




/**
 * 来清楚的认知到存在两条原型链，函数对象出发的一条， 和实例对象出发的一条
 */

/**
 * 1. 从实例对象出发
 *
 */
//{} == [Function: Person] ，
//其中 {} 就是指代 其实就是打印的 Person.prototype
//其中 [Function: Person] 就是指代person1就是 Person函数对象构造出来的，new Person();
console.log(person1.__proto__,"==",person1.__proto__.constructor) ;
//打印的：[Object: null prototype] {} == [Function: Object]
//其中 [Object: null prototype]  说明 Person.prototype 就是 Object.prototype;
//其中 [Function: Object]    说明 Person.prototype 就是 new Object() 构造出来的；
console.log(Person.prototype.__proto__,"==",Person.prototype.__proto__.constructor);
//打印 null
console.log(Object.prototype.__proto__);
console.log(person1.__proto__.__proto__.__proto__); //打印 null ,

/**
 * 从函数对象出发
 */
//打印的 [Function (anonymous)] Objec ,其实就是 Function.prototype， 说明Person函数对象是通过 new Function() 创建出来的 ;
console.log(Person.__proto__);
//打印的 [Object: null prototype] {} ，其实就是Object.prototype，说明Function.prototype 是通过new Object() 创建出来的；
console.log(Function.prototype.__proto__);