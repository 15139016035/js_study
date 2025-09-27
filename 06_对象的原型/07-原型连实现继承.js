/**
 * 通过原型连实现继承的 一个案例
 */


/**
 * 父类Person
 */

function Person(name, age) {
    this.name = name;
    this.age = age;

}

Person.prototype.running = function () {
    console.log(this.name + "在跑步～～");
}

/**
 * 子类。Studetn 和 Teatcher
 */

function Student(name, age, score) {
    //间接的实现属性的继承
    /**
     * 这种实现属性继承的逻辑：
     *   let stu = new Student();  此时this就是stu实例对象；
     *   然后通过call调用了Person，Person内部就会执行代码，Person内部的this就是stu
     *   就是stu.name =name ,stu.age =age;
     */
    Person.call(this,name,age);
    this.score = score;
}

Student.prototype.study = function () {
    console.log("学生在学习");
}
////非最佳代码，最佳代码请移步语雀
Student.prototype.__proto__=Person.prototype;

function Teacher(name,age){
    //间接的实现属性的继承
    Person.call(this,name,age);

}

Teacher.prototype.teatch=function(){
    console.log("老师在教学")
}
//非最佳代码，最佳代码请移步语雀
Teacher.prototype.__proto__=Person.prototype;


let teacher = new Teacher("张老师");
teacher.running();
teacher.teatch();

let student = new Student("王同学");
student.running();
student.study();

