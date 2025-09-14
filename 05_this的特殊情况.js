// "use strict"


let obj1 ={
    foo:function(){
        console.log(this);
    }
};

let obj2 ={};

(obj2.foo =obj1.foo)()
