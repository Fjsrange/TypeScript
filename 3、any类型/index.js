/**
 * 1、any 类型
 */
/*
// let x:any;

// x = 1; // 正确
// x = 'hello'; // 正确
// x = true; // 正确
// x(1) // 不报错
// x.foo = 100; // 不报错

// function add(x, y) {
//   return x + y;
// }

// add(1, [1, 2, 3]) // 不报错

// any类型除了关闭类型检查，还有一个很大的问题，就是它会“污染”其他变量。它可以赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错。

let x:any = 'hello';
let y:number;

y = x; // 不报错

y * 123 // 不报错
y.toFixed() // 不报错
 */
/**
 * 2、unknown 类型
 */
/*
let x:unknown;

x = true; // 正确
x = 42; // 正确
x = 'Hello World'; // 正确

// unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
let v:unknown = 123;

// let v1:boolean = v; // 报错
// let v2:number = v; // 报错

// 上面示例中，变量v是unknown类型，赋值给any和unknown以外类型的变量都会报错，这就避免了污染问题，从而克服了any类型的一大缺点。

// 其次，不能直接调用unknown类型变量的方法和属性。
let v1:unknown = { foo: 123 };
v1.foo  // 报错

let v2:unknown = 'hello';
v2.trim() // 报错

let v3:unknown = (n = 0) => n + 1;
v3() // 报错
// 上面示例中，直接调用unknown类型变量的属性和方法，或者直接当作函数执行，都会报错。

// 再次，unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。

let a:unknown = 1;

a + 1 // 报错
a === 1 // 正确

// 只有经过“类型缩小”，unknown类型变量才可以使用。所谓“类型缩小”，就是缩小unknown变量的类型范围，确保不会出错。
if (typeof a === 'number') {
  let r = a + 10; // 正确
}
// 上面示例中，unknown类型的变量a经过typeof运算以后，能够确定实际类型是number，就能用于加法运算了。这就是“类型缩小”，即将一个不确定的类型缩小为更明确的类型。

let s:unknown = 'hello';

if (typeof s === 'string') {
  s.length; // 正确
}
 */
/**
 * 3、never 类型
 */
var x;
// 变量x的类型是never，就不可能赋给它任何值，否则都会报错。
// 如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型。这时，处理所有可能的类型之后，剩余的情况就属于never类型。
// never类型表示的是那些永不存在的值的类型。例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数的返回值类型。
function fn(x) {
    if (typeof x === 'string') {
        // ...
    }
    else if (typeof x === 'number') {
        // ...
    }
    else {
        x; // never 类型
    }
}
// never类型的一个重要特点是，可以赋值给任意其他类型。
function f() {
    throw new Error('Error');
}
var v1 = f(); // 不报错
var v2 = f(); // 不报错
var v3 = f(); // 不报错
