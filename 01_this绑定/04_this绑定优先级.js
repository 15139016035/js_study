/**
 * this 的绑定优先级从高到低依次如下：
 *
 * new 绑定
 *
 * 显式绑定 (call, apply, bind)
 *
 * 隐式绑定 (作为对象方法调用)
 *
 * 默认绑定 (全局对象或 undefined)
 */


/**
 * 案例一： new 和bind() 优先级的比较
 */
function foo(){
    console.log(this);
}
const newFoo =foo.bind("abd");
new newFoo();  //打印 foo {}

/**
 * bind和apply的比较
 * bind > apply
 */

function foo1(){
    console.log(this);
}
const newFoo1 =foo1.bind("1111");
newFoo1.apply("2222");  // 打印 [String: '1111']


