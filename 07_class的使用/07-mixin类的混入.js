/**
 * mixin类的混入
 *
 */

class Animal {
    running(){}
}

class Flyer{
    flying(){}
}

class Bird{
    eating(){}
}

/**
 * 需求 ：上面有三个类，希望Bird能够通过继承Animal和Flyer ，然后拥有跑和飞的本领
 */

function mixinAnimal(SuperClass){
    /**
     * 返回一个类，这个类是匿名的，继承了外面传进来的一个类SuperClass
     */
        return class extends SuperClass{
            running(){}
        }
}

function mixinFly(SuperClass){
    /**
     * 返回一个类，这个类是匿名的，继承了外面传进来的一个类SuperClass
     */
    return class extends SuperClass{
        flying(){}
    }
}


//写法一：
let NewBird =mixinFly(mixinAnimal(Bird));
let bird = new NewBird();
bird.running();
bird.flying();
bird.eating();

//写法二： 比写法一多了一层继承；
class NewBird2 extends mixinFly(mixinAnimal(Bird)){

}
let bird2 = new NewBird2();
bird2.running();
bird2.flying();
bird2.eating();