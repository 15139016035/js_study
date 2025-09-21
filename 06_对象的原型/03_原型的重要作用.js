/**
 * 原型
 */
/**
 *每个人都有自己的姓名
 * 每个人也有自己喜欢吃的食物
 */
function Person(name){
        this.name =name;


        this.eat = function (food){
            console.log(this.name+"我喜欢吃"+food);
        }
}

let p1 =new Person("John");
let p2 =new Person("Tom");
p1.eat("香肠");
p2.eat("香蕉");

console.log(p1.eat === p2.eat);  //打印false；


/**
 * 通过原型 让eat函数只存在一份，但是每个人都公用
 */
function Person1(name){
    this.name =name;
}

Person1.prototype.eat=function(food){
    console.log(this.name+"我喜欢吃"+food);
}
let p3 =new Person1("John");
let p4 =new Person1("Tom");
p3.eat("香肠");
p4.eat("香蕉");

console.log(p3.eat === p4.eat);  //打印false；
