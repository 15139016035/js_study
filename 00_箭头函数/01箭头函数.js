//1.箭头函数的this

const obj = {
    name: "A",
    fn: () =>console.log(this)
};

obj.fn();


{
   const  fun =()=> console.log(this === module.exports);
    fun();

}

let obj1 ={
    name: "A",
    fun: function () {
        console.log(this.name);
    }
}

const fun = obj1.fun;
    fun();
