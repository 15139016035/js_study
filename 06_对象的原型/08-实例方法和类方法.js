/**
 * 实例方法和类方法；
 */


function Person(name,age){
    this.name=name;
    this.age=age
}

//实例方法的添加；
Person.prototype.running=function(){
    console.log(this.name+"runing~");
}

//类方法的添加
Person.eating=function(){
    console.log(this.name+"eating~");
}


// Person.running(); 实例方法 需要通过实例对象调用； Person.__proto__ 原型链上是找不到running()的；
Person.eating();