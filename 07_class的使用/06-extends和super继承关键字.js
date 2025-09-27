/**
 * 继承关键字
 */

class Person{
    constructor(name, age) {
        this.name = name;
        this.age=age;

    }
    running(){
        console.log(this.name+"在running~");
    }
    eating(){
        console.log(this.name+"在eating~");
    }

    //静态方法
    static sleep(){
        console.log("在slepp~");
    }
}

//使用extends继承Person
class Student extends Person{
    constructor(name, age,title) {
        //使用this 和返回之前必须先super()来调用父类的构造函数；
        super(name,age);
        this.title=title;

    }

    //running进行重写，这个重写的目的是为了加强父类的running
    running(){
        super.running();
        console.log("并且还带了一条狗，顺便遛狗～")

    }

    study(){
        console.log(this.name+"在study~");
    }
    static sleep(){
       super.sleep();
       console.log("是在趴着睡觉的")
    }

}

let s = new Student("wyh",18);
s.study();
s.eating();
