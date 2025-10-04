/**
 * 使用 Proxy进行监听原对象的操作
 */

//原对象
const obj ={
    name :"syh",
    age:18,
    height:188
}


//为obj对象创建代理对象
const objProxy = new Proxy(obj,{
   get: function (target,prop,receiver) {
       console.log(`${prop}属性的获取监听被触发了`);
       return target[prop];
   },
    set: function (target,prop,value,receiver) {
       console.log(`${prop}属性的修改赋值操作触发，新的值${value}`);
       target[prop] = value;
    },

    deleteProperty(target, prop) {
        console.log(`${prop}属性被删除了`)
    }
});


objProxy.name='wyh';
console.log(objProxy.name);

//设置一个新的属性
objProxy.address ='广州';