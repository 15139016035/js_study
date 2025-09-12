//这里只讲一个 之前不知道的
function fun (){
    a =10;
}
fun();
{
    b=20;
}
console.log("未使用任何关键字声明的变量a",a);
console.log("未使用任何关键字声明的变量b",b);


//为了证明是不是放到了全局对象身上
console.log("打印全局对象的a和b",globalThis.a,"===",globalThis.b);