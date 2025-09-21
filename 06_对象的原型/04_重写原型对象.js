function Person(){

}

//原型对象上添加所有实例会公用的属性
Person.prototype.message ="hello Person";
Person.prototype.info ="hello Person";
Person.prototype.running =function(){};
//....等等 还有很多
//发现不会打印 constructor ，说明constructor属性是不可枚举的
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyDescriptor(Person,"prototype"));

/**
 * 上面这样不如我直接给Person赋予一个新的原型对象
 */

Person.prototype={
    message:"hello Person",
    info:"hello Person",
    running:function(){}
    //....等等很多
}
//切记还有一个constructor 是不可枚举的；
Object.defineProperty(Person.prototype,"constructor",{
    configurable:false,
    writable:true,
    enumerable:false,
    value:Person
})


