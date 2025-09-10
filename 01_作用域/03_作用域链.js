var value = 1;

function foo() {
    console.log(value); // 这个 value 是哪个 value?
}

function bar() {
   value = 2;
    foo(); // 在 bar 内部调用 foo
}

bar(); // 输出结果是什么？