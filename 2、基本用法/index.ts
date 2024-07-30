/**
 * 1、类型声明
 */
/* 
  // 声明 foo 是一个字符串
  // let foo:string;

  // num:number：声明接收的参数 是一个数字
  // function toString():string：声明该函数的返回值是一个字符串
  function toString(num:number):string {
    return num.toString();
  }

  // 报错 - 无法将类型“number”分配给类型“string”。
  let foo:string = 123;

  // 变量x没有赋值就被读取，导致报错
  let x:number;
  console.log(x) // 报错 - 在赋值前使用了变量 "x"。 
*/

/**
 * 2、类型推断
 */
/* 
  // 类型声明并不是必需的，如果没有，TypeScript 会自己推断类型。
  let foo = 123; // TypeScript 会推断 foo 的类型是 number。
  // foo = 'hello'; // 报错 - 不能将类型“string”分配给类型“number”。

  // TypeScript 也可以推断函数的返回值。
  function toString(num:number) {
    return String(num);
  }
  // toString(123); // 报错 - 不能将类型“number”分配给类型“string”。
  
    // 上面示例中，函数toString()没有声明返回值的类型，
    // 但是 TypeScript 推断返回的是字符串。
    // 正是因为 TypeScript 的类型推断，所以函数返回值的类型通常是省略不写的。
 */