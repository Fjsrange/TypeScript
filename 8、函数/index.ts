/**
 * 1、简介
 */
/* 
  // 函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型。
  function hello(txt:string):void {
    console.log('hello' + txt)
  }
  // 上面示例中，函数hello()在声明时，需要给出参数txt的类型（string），以及返回值的类型（void），后者写在参数列表的圆括号后面。void类型表示没有返回值，详见后文。

  hello('world') // hello world

  // 返回值的类型通常可以不写，因为 TypeScript 自己会推断出来。
  function hello2(txt:string) {
    console.log('hello' + txt)
  }
  // 上面示例中，由于没有return语句，TypeScript 会推断出函数hello()没有返回值。

  // 如果变量被赋值为一个函数，变量的类型有两种写法。
  // 写法一
  const hello3 = function(txt:string) {
    console.log('hello' + txt)
  }
  // 写法二
  const hello4:(txt:string)=> void = function(txt:string) {
    console.log('hello' + txt)
  }

  // 写法二有两个地方需要注意
  // 首先，函数的参数要放在圆括号里面，不放会报错。

  // 其次，类型里面的参数名（本例是txt）是必须的。有的语言的函数类型可以不写参数名（比如 C 语言），但是 TypeScript 不行。如果写成(string) => void，TypeScript 会理解成函数有一个名叫 string 的参数，并且这个string参数的类型是any。


  type MyFunc = (string, numebr) => number;
  // (string: any, number: any) => number
  // 上面示例中，函数类型没写参数名，导致 TypeScript 认为参数类型都是any。

  // 写法二拆分
  // 函数类型里面的参数名与实际参数名，可以不一致。
  let f:(x:number) => number;
  f = function(y:number) {
    return y;
  }
  // 上面示例中，函数类型里面的参数名为x，实际的函数定义里面，参数名为y，两者并不相同。

  // 函数的实际参数个数，可以少于类型指定的参数个数，但是不能多于，即TS允许省略参数
  let myFunc:(a:number, b:number) => number;
  myFunc = (a:number) => a; // 正确
  // myFunc = (a:number, b:number, c:number) => a + b + c; // 错误
  // 上面示例中，变量myFunc的类型只能接受两个参数，如果被赋值为只有一个参数的函数，并不报错。但是，被赋值为有三个参数的函数，就会报错。

  // 这是因为 JavaScript 函数在声明时往往有多余的参数，实际使用时可以只传入一部分参数。比如，数组的forEach()方法的参数是一个函数，该函数默认有三个参数(item, index, array) => void，实际上往往只使用第一个参数(item) => void。因此，TypeScript 允许函数传入的参数不足。
  let x = (a:number) => 0;
  let y = (b:number, s:string) => 0;
  y = x; // 正确
  // x = y; // 错误
  // 上面示例中，函数x只有一个参数，函数y有两个参数，x可以赋值给y，反过来就不行。

  // 如果一个变量要套用另一个函数类型，有一个小技巧，就是使用typeof运算符。
  function add(x:number, y:number){
    return x + y;
  }

  const myAdd:typeof add = function(x, y){
    return x + y;
  }
  // 上面示例中，函数myAdd()的类型与函数add()是一样的，那么就可以定义成typeof add。因为函数名add本身不是类型，而是一个值，所以要用typeof运算符返回它的类型。

  // 函数类型还可以采用对象的写法。
  let add1:{(x:number, y:number):number};

  add1 = function(x, y){
    return x + y;
  }
  // 上面示例中，变量 add 的类型就写成了一个对象。

  // 这种写法平时很少用，但是非常合适用在一个场合：函数本身存在属性。
  function f1(x:number) {
    console.log(x);;
  }
  f1(666);
  f1.version = '1.0.0';
  // 上面示例中，函数f()本身还有一个属性version。这时，f完全就是一个对象，类型就要使用对象的写法。
  let foo: {(x:number):void, version:string};
  // 函数类型也可以使用 Interface 来声明，这种写法就是对象写法的翻版，详见《Interface》一章。
  interface myfn {(a:number, b:number):number}
  let add2:myfn = (a, b) => a + b;
  // 上面示例中，interface 命令定义了接口myfn，这个接口的类型就是一个用对象表示的函数。
 */


/**
 * 2、function 类型
 */
/* 
  // TypeScript 提供 Function 类型表示函数，任何函数都属于这个类型。
  function doSomething(f:Function) {
    return f(1, 2, 3);
  }
  // 上面示例中，参数f的类型就是Function，代表这是一个函数。
  // Function 类型的值都可以直接执行。
  // Function 类型的函数可以接受任意数量的参数，每个参数的类型都是any，返回值的类型也是any，代表没有任何约束，所以不建议使用这个类型，给出函数详细的类型声明会更好。
 */


/**
 * 3、箭头函数
 */

// 箭头函数是普通函数的一种简化写法，他的类型写法与普通函数类似。
// const repeat = (str:string, times:number):string => str.repeat(times);
// 上面示例中，变量repeat被赋值为一个箭头函数，类型声明写在箭头函数的定义里面。其中，参数的类型写在参数名后面，返回值类型写在参数列表的圆括号后面。

// 注意，类型写在箭头函数的定义里面，与使用箭头函数表示函数类型，写法有所不同。
function greet(fn:(a:string)=>void):void {
  fn('world');
}
greet((name:string) => console.log(`hello ${name}`));
// 上面示例中，函数greet()的参数fn是一个函数，类型就用箭头函数表示。这时，fn的返回值类型要写在箭头右侧，而不是写在参数列表的圆括号后面。

type Person = {name: string};

const people = ['alice', 'bob', 'jan'].map(
  (name):Person => ({name})
)
// 上面示例中，Person是一个类型别名，代表一个对象，该对象有属性name。变量people是数组的map()方法的返回值。








