//写一个闭包的案例

function addNumber(number){
   return  function (num){
       return  number +num;
    }
}


//创建一个加5的函数
let add5 =addNumber(5);
console.log(add5(5));
console.log(add5(6));

//创建一个加8的函数
let add8 = addNumber(8);
console.log(add8(5));
console.log(add8(8));

//从这里开始 永远都会再使用到add8；，最好把内存回收掉：
add8 =null;