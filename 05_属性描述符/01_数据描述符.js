/**
 * 属性描述符的第一类：数据描述符
 */

let obj ={
    name :"张三",
    age:15
}

/**
 * 案例一 ：对obj对象的name属性进行元数据定义
 */
Object.defineProperty(obj,"name",{
    value: "李四",
    writable: false,
    enumerable: false,
    configurable: false


});
obj.name="王五";
console.log(obj.name); //打印：李四； 因为writable: false,无法被修改

for (const key in obj) {
    console.log(key); //打印 age ，因为enumerable: false ，name属性无法被遍历；
}

