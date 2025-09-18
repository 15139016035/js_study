/**
 * 将多个函数组合，让简单的功能组合实现复杂功能的函数
 */

let number = 100;

function double(num) {
    return num * 2;
}

function pow(num) {
    return num ** 2;
}

console.log(pow(double(number)));

//设计成组合函数
function composeFn(num) {
    return pow(double(2));
}

console.log(composeFn(number));


// 封装一个组合函数：实现功能：传入多个函数，返回一个组合函数
function myComposeFun(...fns) {
    //基础的校验
    if (fns.length <= 0) {
        return;
    }

    for (let fn of fns) {
        if (typeof fn !== "function") {
            throw new Error("参数不是函数，不符合规则！");
            break;
        }
    }
    //返回的函数
    return function (...args) {
        //this是根据外部的调用而决定的；
        let result = fns[0].apply(this, args);
        for (let i = 1; i < fns.length; i++) {
            let fun = fns[i];
            result = fun.apply(this, result);
        }
    }

}


