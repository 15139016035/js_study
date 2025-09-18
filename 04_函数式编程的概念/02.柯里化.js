/**
 * 柯里化 把接收多个参数转化为一系列只接收单一参数的函数的函数式编程的技巧
 */

//非柯里化函数
function foo(x, y, z) {
    console.log(x + y + z);
}


//转换为柯里化函数
function foo1(x) {
    return function foo2(y) {
        return function (z) {
            console.log(x + y + z);
        }
    }
}
//箭头函数的柯里化
let foo2 = x => y => z => console.log(x + y + z);