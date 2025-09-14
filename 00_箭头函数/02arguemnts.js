/**
 * 箭头函数为什么没有arguments
 */


//1. 普通函数
function  fun (v1,v2){
    console.log(arguments)
}

fun(1,2,3,4)

/**
 * 箭头函数 也是会继承外层函数的arguments
 *
 */

function foo (){
    const inner =()=>console.log(arguments);
    inner();
}
foo(1,2,3,4)

/**
 * ES6新语法 ，为了箭头函数。 ...args
 */

const foo1 = (...args) => {
    console.log(args)
};
foo1(1,2,3,4)