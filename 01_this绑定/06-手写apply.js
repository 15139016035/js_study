/**
 * 手写 aaply函数   ；
 * 原生的内置函数 apply ：function.apply(thisArg,[arg1,arg2....])
 */

function foo (){
    console.log(this,"hello");
}


//模拟一个我们自己的 apply；只是大概模拟一下思路；并不严谨；
Function.prototype.myApply=function (thisArg,otherArg){
    //确保thisArg是一个对象类型
    thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg);


    thisArg.fn =this;   //将foo暂存
    thisArg.fn(...otherArg);       //调用foo
    delete thisArg.fn; //删除foo；

}


foo.myApply({name:"wyh"});