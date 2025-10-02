/**
 * Symbol的基本使用
 */

const symbol1 = Symbol();
const symbol2 = Symbol();
const symbol3 = Symbol();

//使用了三种方式往obj添加三个属性
let obj={
    [symbol1] :"hello",
}
obj[symbol2] = "world";
Object.defineProperty(obj,symbol3,{value:"!"});

//获取obj的中key （symbol定义的）
console.log(Object.getOwnPropertySymbols(obj));

for (const key of Object.getOwnPropertySymbols(obj)){
    console.log(obj[key]);
}

/**
 * description
 */


let s1 =Symbol("hello");
console.log("Symbol的描述",s1.description);