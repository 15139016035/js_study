//局部作用于 ：函数作用域和 块作用域；


//1. 函数作用域: 形式参数value 和 函数内声明的sum都属于局部变量，属于函数作用域，只在这个函数内生效，外部无法访问；
function fun (value){
    var sum = 0;
}



//2.块作用域 ,

//2.1 a外部无法访问
{
    let a =0;
}

//2.2 i外部无法访问
for (let i = 0; i < 10; i++) {

}
//打印的undefined
console.log("let:::",i);


//2.3
for (var i = 0; i < 10; i++) {

}
//打印：10
//不会报错 因为i是用var声明的 ，var没有块作用域
console.log("var:::",i);