/**
 * 解构：
 *  对象的解构
 *  数组的解构
 */

/**
 * 对象的解构
 */

let obj = {
    name :"wyh",
    age:18,
    address: "河南"
}
//解构1. 解构， （没有顺序要求，根据key解构）
let {name,address,age }=obj;
console.log(name,address,age);

//解构02，解构后对变量进行重命名,将name重命名为myName
let {name :myName } =obj;
console.log(myName);

//解构03 默认值, height如果是undefined 给一个默认值
let {height =1.88} =obj
console.log(height);

//解构04 ，对象的剩余属性 ,obj中除了name的其他属性都在newObj中
let {name,...newObj}=obj;
console.log(newObj);





/**
 * 数组的解构
 */
let names =['name1',"name2",'name3','name4',undefined,'name6'];



//解构1：依次取出来 前三个元素进行依次赋值 (有严格的顺序)
//跳过了name4，并且name5如果是undefined给一个默认值hhh
let [name1 ,name2,name3,,name5 ="hhh"] =names
console.log(name1,name2,name3);

//解构2：解构出数组 ,将剩余的name3-name6放到newName
let  [name01,name02
    ,...newNames] =names
console.log(name01,name02,newNames);


