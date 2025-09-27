/**
 * 二：class的进阶使用 ：constructor构造函数 和 实例方法
 *
 */

class Person {
    //构造函数的定义,有且仅有一个
    constructor(name, age) {
        //this就是创建的实例；
        this.name =name;
        this.age =age ;
    }

    //实例方法的定义， 等同于向原型prototype上添加方法；
   running(){
        console.log(`${this.name} 在跑步～`)
   }
   eating(){
       console.log(`${this.name} 在吃饭～`)
   }
};


let p1 = new Person("wyh",18);
console.log(p1.name ,p1.age);

//其实 和(new + 函数)充当构造函数一样的原理，会把Person.prototype 赋值给 实例对象的__proto__属性；
console.log(Person.prototype === p1.__proto__);//打印 true；

//调用p1的实例方法
p1.running();
p1.eating()


