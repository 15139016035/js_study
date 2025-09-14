/**
 * 案例一
 */
const obj = {
    name: "花花",
    sayHi() {
        console.log(this);
    }
};
obj.sayHi(); // "花花"
const fn = obj.sayHi;
//不关心函数的定义位置，只关心调用方式，独立调用；
fn(); // undefined（严格模式）/ window（非严格模式）


/**
 * 案例二
 */

function bar(fn){
    fn();
}
//最终的fn还是独立调用
bar(obj.sayHi);


/**
 * 案例三 ,
 */

function foo(){
    console.log(this);
}
let obj2 ={
    fun:foo
}
//this指向obj2对象
obj2.fun();


/**
 * 案例四
 */

let obj3 ={
    hello : function (){
        console.log("obj3:::hello::",this);
    }
};
// (obj3.hello)() === obj3.hello()
(obj3.hello)();
(n =obj3.hello)();