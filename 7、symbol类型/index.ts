/**
 * 1、简介
 */
/* 
  // Symbol 值通过Symbol()函数生成。在 TypeScript 里面，Symbol 的类型使用symbol表示。
  let x:symbol = Symbol();
  let y:symbol = Symbol();
  x === y // false
  // 上面示例中，变量x和y的类型都是symbol，且都用Symbol()生成，但是它们是不相等的。
 */

/**
 * 2、unique symbol
 */
/* 
  // 因为unique symbol表示单个值，所以这个类型的变量是不能修改值的，只能用const命令声明，不能用let声明。
  const x:unique symbol = Symbol(); // 正确
  // let y:unique symbol = Symbol(); // 报错

  // const命令为变量赋值 Symbol 值时，变量类型默认就是unique symbol，所以类型可以省略不写。
  const x1:unique symbol = Symbol();
  // 等同于
  const x2 = Symbol();

  // 每个声明为unique symbol类型的变量，它们的值都是不一样的，其实属于两个值类型。
  const a:unique symbol = Symbol();
  const b:unique symbol = Symbol();
  // a === b // 报错
  // 上面示例中，变量a和变量b的类型虽然都是unique symbol，但其实是两个值类型。不同类型的值肯定是不相等的，所以最后一行就报错了。

  // 由于 Symbol 类似于字符串，可以参考下面的例子来理解。
  const a1:'hello' = 'hello';
  const b1:'world' = 'world';
  // a1 === b1 // 报错
  // 上面示例中，变量a和b都是字符串，但是属于不同的值类型，不能使用严格相等运算符进行比较。

  // 而且，由于变量a和b是两个类型，就不能把一个赋值给另一个
  // const a2 = Symbol();
  const a2:unique symbol = Symbol();
  // const b2:unique symbol = a2; // 报错
  // 上面示例中，变量a和变量b的类型都是unique symbol，但是其实类型不同，所以把a赋值给b会报错。

  // 上例变量b的类型，如果要写成与变量a同一个unique symbol值类型，只能写成类型为typeof a。
  const a3:unique symbol = Symbol();
  const b3:typeof a = a; // 正确

  const a4:unique symbol = Symbol.for('foo');
  const b4:unique symbol = Symbol.for('foo');
  // 上面示例中，变量a和b是两个不同的值类型，但是它们的值其实是相等的。

  // unique symbol 类型是 symbol 类型的子类型，所以可以将前者赋值给后者，但是反过来就不行。
  const a5:unique symbol = Symbol();
  const b5:symbol = a5; // 正确
  // const c5:unique symbol = b5; // 报错
  // 上面示例中，unique symbol 类型（变量a）赋值给 symbol 类型（变量b）是可以的，但是 symbol 类型（变量b）赋值给 unique symbol 类型（变量c）会报错。

  const x3:unique symbol = Symbol();
  const y3:symbol = Symbol();

  interface Foo {
    [x3]: string; // 正确
    // [y3]: string; // 报错
  }
  // 上面示例中，变量y当作属性名，但是y的类型是 symbol，不是固定不变的值，导致报错。

  // unique symbol类型也可以用作类（class）的属性值，但只能赋值给类的readonly static属性。
  class C {
    static readonly foo:unique symbol = Symbol();
  }
  // 上面示例中，静态只读属性foo的类型就是unique symbol。注意，这时static和readonly两个限定符缺一不可，这是为了保证这个属性是固定不变的。
 */


/**
 * 3、类型推断
 */

// let命令声明的变量，推断类型为 symbol。
let x = Symbol();

// const命令声明的变量，推断类型为 unique symbol。
// 类型为 unique symbol
const x1 = Symbol();

// 但是，const命令声明的变量，如果赋值为另一个 symbol 类型的变量，则推断类型为 symbol。
let x2 = Symbol();
// 类型为symbol
const y2 = x2;

// let命令声明的变量，如果赋值为另一个 unique symbol 类型的变量，则推断类型还是 symbol。
const x3 = Symbol();
// 类型为symbol
let y3 = x3;


