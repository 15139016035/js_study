/**
 *ES5的写法
 */
function Person() {

}

//定义类方法
Person.eating=function (){
    console.log("吃东西～");
};

/**
 * ES6的写法，还是要提醒ES6的写法只是一种语法糖，还是要转化为ES5才能运行；
 */
class Student{
    constructor(name, age) {
        this.name = name;
    }

    //实例方法
    running(){
        console.log("");
    }

    //类方法，即静态方法
    static eating(){
        console.log("吃东西~");
    }
}

