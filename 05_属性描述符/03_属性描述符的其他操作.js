let obj = {
    name: "张三",
    age: 18
}


/**
 * 案例一：使用Object.defineProperties 进行批量操作
 */
let _age = 18;
Object.defineProperties(obj, {
    name: {configurable: true, value: "王五", writable: true},
    age: {
        get: function () {
            return _age;
        },
        set: function (newvalue) {
            _age = newvalue;
        },
        enumerable: true,
        configurable: true
    },
    address: {
        value:"张家港",
        configurable: true,
        writable: true
    }
})

/**
 * 获取对象的属性描述符
 */

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
console.log(Object.getOwnPropertyDescriptors(obj));

let obj1 ={
    name: "张三"
}
//禁止obj1对象再添加新的属性
Object.preventExtensions(obj1);
obj1.address ="张家港";
console.log(obj1.address)