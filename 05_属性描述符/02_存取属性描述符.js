/**
 * 属性描述符的另外一类：存取属性描述符
 */

let obj ={
    name:"张三",
    age: 18
}

let  _name =undefined;
Object.defineProperty(obj,"name",{
    get:function(){
        return _name;
    },
    set:function(newvalue){
        // obj.name=newvalue;  不可以这么写，这么写就相当于是又进行了set，就会导致set函数无限递归；
        //正确的做法借助_name
        _name=newvalue;
    },
    configurable:true,
    enumerable:true,
});

obj.name ="王五"
console.log(obj.name);