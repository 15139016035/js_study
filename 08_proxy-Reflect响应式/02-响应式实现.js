/**
 * //监听属性的操作：之前已经讲过了
 * 1. 对象里面直接 get set；
 * 2.使用属性存取描述符
 */
const obj ={
    name :"syh",
    age:18,
    height:188
}







//2. 监听所有的属性，通过属性存取描述符，也是vue2的核心；
for (let key of Object.keys(obj)) {
    let _value = obj[key];

    Object.defineProperty(obj,key,{
        get :function(){
            console.log(`监听了${key}的获取`)
            return _value;
        },
        set:function(newValue){
            _value = newValue;
            console.log(`监听${key}的设置`)
        }
    })
}