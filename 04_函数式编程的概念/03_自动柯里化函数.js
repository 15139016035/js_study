/**
 * 实现一个函数，功能：传入普通的函数返回柯里化函数
 */

function bar(x, y, z) {
    console.log(x + y + z);
}


//自动柯里化函数
function hyCurrying(fn){
    //我们返回出去的自动柯里化函数内部主要做两件事情： 第一件返回函数为了接收参数； 第二件收集完参数进行调用；
    function curryFn(...args) {
        //判断接收的参数个数，已经大于所需要的参数个数
        if (args.length >= fn.length){
          return  fn.apply(this,args);  //参数收集完整后调用
        }else{
            //参数未收集完整，返回函数继续收集参数；
            return function (...newArgs){
             return    curryFn.apply(this, args.concat(newArgs));
            }
        }
    }
    return curryFn;
}


//使用我们的自动柯里化函数
let fun =hyCurrying(bar);
fun(1)(2)(3);