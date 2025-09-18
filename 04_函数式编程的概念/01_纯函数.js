/**
 * 纯函数的案例：
 */

/**
 *  数组的两个实例方法，
 *  slice()：纯函数，不修改原数组
 *  splice() ：非纯函数，直接对原数组操作；
 */

let array = [1,2,3,4,5];

// 不修改原数组，返回新的数组，（浅拷贝只复制引用）;
const newArray=array.slice(2,3);

console.log(newArray);
console.log(array);

array.splice( 2,4);

console.log(array);