/**
 * 一种对比，更明显的体验
 */
class Person{
    constructor(name ,age){
        this.name =name ;
        this.age =age;
    }
    //实例方法running的定义
    running(){
        console.log(this.name+"在跑步~");
    }
};

console.log(new Person().__proto__  === Person.prototype);



function Student(name,age){
    this.name = name;
    this.age = age;
}
//实例方法study的定义
Student.prototype.study=function(){
    console.log(this.name+"在学习~");
}

console.log(new Student().__proto__  === Student.prototype);