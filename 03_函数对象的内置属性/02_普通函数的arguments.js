/**
 * 本章节讲述的是：arguments ,类数组对象
 * 1. arguments不是一个数组类型，而是一个对象；但是对象封装的过程中让他有了一些数组的特性；
 * 2. arguments 会包含所有的传入的实参；
 * 3. 将arguments 转为Array类型，方便使用；
 *      3.1 循环遍历Arguments，然后每个元素添加到一个数组中；
 *      3.2 ES6语法提供：Array.from(可迭代对象);
 *      3.3 ES6语法提供：使用展开运算符 ... ，[...arguments]
 *      3.4 一种古老的方式： 使用slice() 函数
 */


/**
 *
 */
function foo(x,y,z){
        console.log(arguments);
    //是一个可迭代对象，但是不是数组类型；
    for (let item of arguments){
        console.log(item);
    }

    //3.2 使用 Array.from(可迭代对象);将arguments转为数组类型
    let newArgumentsArray1 = Array.from(arguments);
    //3.3 使用展开运算符... ，将arguments转换为数组类型
    let newArgumentsArray2 =[...arguments];
    //3.4 使用slice()函数，将argumetns转换为数组
    let newArgumentsArray3 = [].slice.apply(arguments)

}




foo(1,2,3,4,5);


/**
 * slice 能将arguments转换为数组的原因；
 *   slice是数组实例的一个方法；可以返回截取后的数组，不传参数代表截取整个数组；
 */

// 这样的调用this和array进行绑定；
// slice内部会对this进行将要截取的内容复制到一个新的数组进行返回（浅拷贝，只会复制原数组中的引用）
let array =[1,2,3,4,5];
let array2 = array.slice();

//[].slice 是因为slice是数组的实例方法； apply[array] 是为了指定this的绑定对象；
let array3 =[].slice.apply(array);
