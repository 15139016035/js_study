"use strict"



//1.定时器
//在window环境 ：经过测试在严格模式下this是window， 可以猜测认为 是通过window对象调用，默认绑定
setTimeout(function (){
    console.log("定时任务的::",this);
},1000);


//2.点击按钮
//在window环境下：经过测试应该是 通过button元素进行调用 默认绑定
let button =document.createElement("button");
button.onclick=function (){
    console.log("点击事件的::",this);
};

button.addEventListener("click", function (){
    console.log("点击事件的::",this);
});

//3.forEach
//在node环境下：默认this是undefined ； 但是forEach有第二个参数如下代码 我传入"hello world" ，就是指定了this 的指向；
let arr =[1,2,3,4];
arr.forEach(function (item){
    console.log("forEach的",this);
},"hello world")