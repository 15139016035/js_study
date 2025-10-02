/**
 * 手写bind函数
 *   内置bind的语法：   cont newFun = function.bind(thisArg,arg1,arg2...);
 */
function foo(){
    console.log(this,"hello")
}


//模拟bind函数
Function.prototype.myBind=function (thisArg,...args){
    //确保thisArg是一个对象类型
    thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg);
    //this是foo
    thisArg.fn =this;
    //返回一个新的函数；
    return function(...newArgs){
        thisArg.fn([...args,...newArgs]);
        delete thisArg.fn;
    }
}



let newFoo = foo.myBind(this);


for (let i = 0; i < 10; i++) {
    let message = i;
}
console.log(message);