/**
 * 1、简介
 */
/*
  // 数组的类型有两种写法。第一种写法是在数组成员的类型后面，加上一对方括号。
  let arr:number[] = [1,2,3,4,5]; // 是一个数组，数组中只能存放数字

  // 如果数组成员的类型比较复杂，可以写在圆括号里面。
  let arr2:(number|string)[] = [1,2,3,'4','5']; // 是一个数组，数组中只能存放数字或字符串
  // 上面示例中，数组arr的成员类型是number|string。

  let arr3:any[]; // 可以是任意类型，尽量避免这种写法
  // 数组类型的第二种写法是ts内置的Array接口
  let arr4:Array<number> = [1,2,3,4,5]; // 是一个数组，数组中只能存放数字
  let arr5:Array<number|string>; // 这种写法对于成员类型比较复杂的数组，代码可读性会稍微好一些。

  // 数组类型声明之后，成员数量是不限制的，任意数量的成员都可以，也可以是空数组。
  let arr6:number[];
  arr6 = [];
  arr6 = [1];
  arr6 = [1, 2];
  // ...
  // 无论arr6有多少个成员，都是正确的

  let arr7:number[] = [1, 2, 3];
  arr7[3] = 4;
  arr7.length = 2
  console.log(arr7); // [1, 2]
  // 上面示例中，数组增加成员或减少成员，都是可以的。

  let arr8:number[] = [1, 2, 3];
  let foo = arr8[3]; // 变量foo的值是一个不存在的数组成员，TypeScript 并不会报错。
  console.log(foo); // undefined

  // type Names = string[];
  // type Name = Names[0]; // string
  // 上面示例中，类型Names是字符串数组，那么Names[0]返回的类型就是string。

  // 由于数组成员的索引类型都是number，所以读取成员类型也可以写成下面这样。
  type Names = string[];
  type Name = Names[number]; // string
  // 上面示例中，Names[number]表示数组Names所有数值索引的成员类型，所以返回string。
 */
/**
 * 2、数组的类型判断
 */
/*
    // 如果变量的初始值是空数组，那么 TypeScript 会推断数组类型是any[]。
  const arr = [];
  // arr // 推断为 any[]
  arr.push(1);
  console.log(arr);
  // arr // 推断为 number[]

  arr.push('hello');
  console.log(arr);
  // arr // 推断为 (number|string)[]
  // 上面示例中，数组变量arr的初始值是空数组，然后随着新成员的加入，TypeScript 会自动修改推断的数组类型。

  // 但是，类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新。
  const arr2 = [123];
  // arr2.push('hello'); // 报错
 */
/**
 * 3、只读数组，const断言
 */
/*
  // JavaScript 规定，const命令声明的数组变量是可以改变成员的。
  const arr = [0, 1];
  arr[0] = 2;
  // console.log(arr);

  // TypeScript 允许声明只读数组，方法是在数组类型前面加上readonly关键字。
  const arr2:readonly number[] = [0, 1];
  // arr2[0] = 2; // 报错
  // arr2.push(2); // 报错
  // delete arr2[0]; // 报错
  // 上面示例中，arr是一个只读数组，删除、修改、新增数组成员都会报错。

  let a1:number[] = [0, 1];
  let a2:readonly number[] = a1; // 正确
  // a1 = a2; // 报错
  // 上面示例中，子类型number[]可以赋值给父类型readonly number[]，但是反过来就会报错。


  // 由于只读数组是数组的父类型，所以它不能代替数组。这一点很容易产生令人困惑的报错
  function getSum(s:number[]){
    console.log(s);
    // ...
  }
  getSum([1,2,3]); // 正确
  // const arr2:readonly number[] = [1,2,3,4,5];
  // getSum(arr2); // 报错
  // 上面示例中，函数getSum()的参数s是一个数组，传入只读数组就会报错。

  // 注意，readonly关键字不能与数组的泛型写法一起使用。
  // const arr3:readonly Array<number> = [0,1];
  // 上面示例中，readonly与数组的泛型写法一起使用，就会报错。

  const a3:ReadonlyArray<number> = [0, 1];
  const a4:Readonly<number[]> = [0, 1];
  // 上面示例中，泛型ReadonlyArray<T>和Readonly<T[]>都可以用来生成只读数组类型。两者尖括号里面的写法不一样，Readonly<T[]>的尖括号里面是整个数组（number[]），而ReadonlyArray<T>的尖括号里面是数组成员（number）。

  // 只读数组还有一种声明方法，就是使用“const 断言”。
  const arr4 = [0, 1] as const;
  arr[0] = 2; // 报错
  // 上面示例中，as const告诉 TypeScript，推断类型时要把变量arr推断为只读数组，从而使得数组成员无法改变。
 */
/**
 * 4、多维数组
 */
// TypeScript 使用T[][]的形式，表示二维数组，T是最底层数组成员的类型。
var multi = [[1, 2, 3], [24, 25, 26]];
// 上面示例中，变量multi的类型是number[][]，表示它是一个二维数组，最底层的数组成员类型是number。
console.log(multi);
