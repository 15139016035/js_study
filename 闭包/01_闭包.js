function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    function inner2(){
        count++;
        console.log(count);
    }

    return {
        inner1:inner,
        inner2:inner2,
    }
}

const fn = outer();
fn.inner1()
fn.inner1()
fn.inner1()


fn.inner2()
fn.inner2()
fn.inner2()