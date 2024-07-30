/**
 * 1、基本类型
 */
/*
// 1.1 boolean类型只包含true和false两个布尔值。
// let x:boolean = true;
// let y:boolean = false;

// 1.2 string类型包含所有字符串。
// let x:string = 'hello';
// let y:string = `${x} world`;

// 1.3 number类型包含所有整数和浮点数。
// let x:number = 1;
// let y:number = 3.14;
// let z:number = 0xffff; // 十六进制表示的数字

// 1.4 bigint 类型包含所有的大整数。
// const x:bigint = 123n;
// const y:bigint = 0xffffn; // 十六进制表示的大整数

// bigint 与 number 类型不兼容。
// const x:bigint = 123; // 报错
// const y:bigint = 3.14; // 报错
// 上面示例中，bigint类型赋值为整数和小数，都会报错。

// 1.5 symbol 类型包含所有的 Symbol 值。 symbol类型表示唯一的标识符。
// const x:symbol = Symbol();

// 1.6 object 类型
// 根据 JavaScript 的设计，object 类型包含了所有对象、数组和函数。
// let x:object = {foo: 333};
// let y:object = [1, 2, 3];
// let z:object = (n:number) => n + 1;

// 1.7 undefined 类型，null 类型
// undefined 和 null 是两种独立类型，它们各自都只有一个值
// let x:undefined = undefined;
// const x:null = null;

// 注意，如果没有声明类型的变量，被赋值为undefined或null，在关闭编译设置noImplicitAny和strictNullChecks时，它们的类型会被推断为any。
// 关闭 noImplicitAny 和 strictNullChecks
// let a = undefined; // any
// const b = undefined; // any

// let c = null; // any
// const d = null; // any
// 如果希望避免这种情况，则需要打开编译选项strictNullChecks。
// let a = undefined; // undefined
// const b = undefined; // undefined

// let c = null; // null
// const d = null; // null
// 上面示例中，打开编译设置strictNullChecks以后，赋值为undefined的变量会被推断为undefined类型，赋值为null的变量会被推断为null类型。
 */
/**
 * 2、包装对象类型
 */
/*
  // const s = new String('hello');
  // typeof s // 'object'
  // s.charAt(1) // 'e'
  // // 上面示例中，s就是字符串hello的包装对象，typeof运算符返回object，不是string，但是本质上它还是字符串，可以使用所有的字符串方法。

  // 'hello' // 字面量
  // new String('hello') // 包装对象

  // // 大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象。
  // const s1:String = 'hello'; // 正确
  // const s2:String = new String('hello'); // 正确

  // const s3:string = 'hello'; // 正确
  // const s4:string = new String('hello'); // 报错

  // const n1:number = 1;
  // const n2:Number = 1;

  // Math.abs(n1); // 正确
  // Math.abs(n2); // 报错
 */
/**
 * 3、Object 类型与 object 类型
 */
/*
  // 空对象{}是Object类型的简写形式
  // let obj:{};
  let obj:Object;

  obj = true;
  obj = 'hello';
  obj = 1;
  obj = {foo: 123};
  obj = [1, 2, 3];
  obj = (n:number) => n + 1;
  // 上面示例中，原始类型值、对象、数组、函数都是合法的Object类型。
  // 除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型。

  let obj2:object;
  // obj2 = undefined; // 报错
  // obj2 = null; // 报错

  obj2 = {foo: 123};
  obj2 = [1, 2, 3];
  obj2 = (n:number) => n + 1;
  // obj2 = true; // 报错
  // obj2 = 'h1'; // 报错
  // obj2 = 1; // 报错
  // 上面示例中，object类型不包含原始类型值，只包含对象、数组和函数。

  const o1:Object = { foo: 0 };
  const o2:object = { foo: 0 };

  o1.toString(); // 正确
  o1.foo; // 报错

  o2.toString(); // 正确
  o2.foo; // 报错
  // 上面示例中，toString()是对象的原生方法，可以正确访问。foo是自定义属性，访问就会报错。
 */
/**
 * 4、undefined 和 null 的特殊性
 */
/*
  // undefined和null既是值，又是类型
  // 作为值，它们有一个特殊的地方：任何其他类型的变量都可以赋值为undefined或null。
  let age:number = 24;
  // age = null; // 报错
  // age = undefined; // 报错
 */
/**
 * 5、值类型
 */
/*
  // TypeScript 规定，单个值也是一种类型，称为“值类型”。
  // let x:'hello';
  // x = 'hello'; // 正确
  // x = 'world'; // 报错

  // a 的类型是 'https'
  // const a = 'https';
  // b 的类型是 string
  // const b:string = 'https';


  // 注意，const命令声明的变量，如果赋值为对象，并不会推断为值类型。
  // x  的类型的 { foo: number}
  // const x = { foo: 1 };

  // 等号左侧的类型是数值5，等号右侧4 + 1的类型，TypeScript 推测为number。由于5是number的子类型，number是5的父类型，父类型不能赋值给子类型，所以报错了。
  // const x:5 = 4 + 1; // 报错

  // 但是，反过来是可以的，子类型可以赋值给父类型。
  // let x:5 = 5;
  // let y:number = 4 + 1;

  // x = y; // 报错
  // y = x; // 正确


  // 如果一定要让子类型可以赋值为父类型的值，就要用到类型断言。
  const x:5 = (4 + 1) as 5; // 正确
 */
/**
 * 6、联合类型
 */
/*
  // 联合类型A|B表示，任何一个类型只要属于A或B，就属于联合类型A|B。
  let x:number|string; // 变量x值既可以是字符串，也可以是数值。

  x = 123; // 正确
  x = 'abc'; // 正确


  let setting:true|false;

  let gender:'male'|'female';

  let rainbowColor:'赤'|'橙'|'黄'|'绿'|'青'|'蓝'|'紫';
  // 上面的示例都是由值类型组成的联合类型，非常清晰地表达了变量的取值范围。其中，true|false其实就是布尔类型boolean。

  // let name:string|null;
  // name = 'John';
  // name = null;


  function printId(id:number|string) {
    // 参数变量id可能是数值，也可能是字符串，这时直接对这个变量调用toUpperCase()方法会报错，因为这个方法只存在于字符串，不存在于数值。
    // console.log(id.toUpperCase()); // 报错

    // 解决方法就是对参数id做一下类型缩小，确定它的类型以后再进行处理。
    if (typeof id === 'string') {
      console.log(id.toUpperCase());
    } else {
      console.log(id);
    }
  }

  // 根据传入的scheme参数，返回对应的端口号
  function getPort( scheme: 'http'|'https' ) {
    console.log('scheme',scheme);
    // 使用switch语句判断scheme参数的值
    switch (scheme) {
      // 如果scheme参数的值为'http'，则返回80
      case 'http':
        return 80;
      // 如果scheme参数的值为'https'，则返回443
      case 'https':
        return 443;
    }
    
  }
  printId(66);
  printId('33');
  getPort('http');
  getPort('https');
  // 终端输入 ts-node index.ts 运行，输出结果：66(number)、33(string)、http(string)、https(string)
 */
/**
 * 7、交叉类型
 */
/*
  // 交叉类型A&B表示，任何一个类型必须同时属于A和B，才属于交叉类型A&B，即交叉类型同时满足A和B的特征。
  let x:number&string;
  // 上面示例中，变量x同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为x的类型实际是never。

  // 交叉类型的 主要用途 是表示 对象的合成。
  let obj:{foo:string} & {bar:string};

  obj = {foo:'hello',bar:'world'}; // 正确

  type A = { foo: number };
  type B = A & {bar: number};
  // 上面示例中，类型B是一个交叉类型，用来在A的基础上增加了属性bar。
 */
/**
 * 8 type命令
 */
/*
  // type 命令用来定义一个类型的别名。
  type Age = number;
  let age:Age = 123;

  // 别名不允许重名。
  type Color = 'red';
  // type Color = 'blue'; // 报错


  if(Math.random() < 0.5){
    type Color = 'blue'
  }

  // 别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套。
  type World = 'world';
  type Greeting = `hello${World}`;
 */
/**
 * 9、typeof运算符
 */
// JavaScript 语言中，typeof 运算符是一个一元运算符，返回一个字符串，代表操作数的类型。
// typeof 'foo'; // "string"
// 在js中，typeof运算符只能返回八种结果，而且都是字符串
// typeof undefined; // "undefined"
// typeof true; // "boolean"
// typeof 1233; // "number"
// typeof 'foo'; // "string"
// typeof {}; // "object"
// typeof parseInt; // "function"
// typeof Symbol; // "symbol"
// typeof 123n; // "bigint"
// TypeScript 将typeof运算符移植到了类型运算，它的操作数依然是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型。
// const a = {x: 0};
// type T0 = typeof a; // {x: number}
// type T1 = typeof a.x; // number
var a = 1;
var b; // b的类型是number
if (typeof a === 'number') {
    b = a;
    console.log(b);
}
// type MyAge = typeof Age; // 报错
/**
 * 10、块级声明类型
 */
/*
  // TypeScript 支持块级类型声明，即类型可以声明在代码块（用大括号表示）里面，并且只在当前代码块有效。
  if(true){
    type T = number;
    let v:T = 5;
  } else {
    type T = string;
    let v:T = 'hello';
  }
 */
/**
 * 11、类型的兼容
 */
/*
  // TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。
  // type T = number|string;
  // let a:number = 1
  // let b:T = a; // 兼容


  // TypeScript 的一个规则是，凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行。
  let a:'hi' = 'hi';
  let b:string = a; // 兼容

  b = a; // 正确
  a = b; // 报错
  // 上面示例中，hi是string的子类型，string是hi的父类型。所以，变量a可以赋值给变量b，但是反过来就会报错。
 */ 
