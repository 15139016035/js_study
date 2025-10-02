/**
 * 方式一：使用属性存储描述符 ,属性描述符中定义访问器
 */
let obj = {}

let _name = "wyh"
Object.defineProperties(obj, "name", {
    configurable: true,
    enumerable: true,
    //设置
    set: function (newValue) {
        _name = newValue;
    },
    //获取
    get: function () {
        return _name;
    }
});


/**
 * 直接在对象中定义访问器,
 * 但是我们一般不会这样去写代码，否则一个对象有普通的属性，又有访问器的属性，
 * 推荐使用属性存取描述符；
 */


let obj1 = {
    _name: "wyh",
    set name(newValue) {
        this._name = newValue;
    },
    get name() {
        return this._name;
    }
}


/**
 * calss 使用访问器
 */

class Person {
    constructor(name, age) {
        this._name = name;
    }

    //访问器
    set name(value){
        this._name = value;
    }

    get name() {
        return this._name;
    }
}

let p1 = new Person("wyh",18);
p1.name ="wuyaohua";
console.log(p1.name );
