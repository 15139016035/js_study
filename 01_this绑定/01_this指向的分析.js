// "use strict"  严格模式

//定义函数
function foo() {
    console.log(this)
}
//方式一（默认绑定）：直接调用; this（浏览器window） （node是global）
foo();


//方式二（隐式绑定）：对象调用 ,this指向对象
let obj ={name :"wyh"};
obj.fun =foo;
obj.fun();


//方式三（显式绑定） ：call ，apply，bind进行显式绑定
//3.1 call() 方法会立即执行函数。它的第一个参数是函数执行时 this 的指向，随后的所有参数将作为独立参数传递给该函数。
function calltest(value1,value2){
    console.log(this);
    console.log(value1);
    console.log(value2);
}
calltest.call("我是this","wyh",18,1996);

//3.2 apply()： apply() 方法与 call() 非常相似 唯一的区别 apply() 的第二个参数是一个包含所有参数的数组
function applytest(value1,value2){
    console.log(this);
    console.log(value1);
    console.log(value2);
}
applytest.apply("我是this",["hello","world","!!!"]);

//3.3bind() :不会立刻执行函数,会创建一个新的函数，这个新函数的this永久和bind的第一个参数进行绑定，之后无论如何调用这个新函数this的指向都不会变；

function bindtest(value1,value2){
    console.log(this);
    console.log(value1);
    console.log(value2);
}


const newBindFun =bindtest.bind("this_bind");
//演示无论如何调用newBindFun ，this指向都不会变
newBindFun();
let obj3={
    fun:newBindFun
}
obj3.fun();