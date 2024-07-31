/**
 * 1、简介
 */
/*
  // 由于成员的类型可以不一样，所以元组必须明确声明每个成员的类型。
  const s:[string, string, boolean] = ['a', 'b', true];
  console.log(s);
  // 上面示例中，元组s的前两个成员的类型是string，最后一个成员的类型是boolean。

  // 数组
  let a :number[] = [1];
  // 元组
  let t:[number] = [1];

  // 使用元组时，必须明确给出类型声明（上例的[number]），不能省略，否则 TypeScript 会把一个值自动推断为数组。
  // a1 的类型被推断为(number|boolean)
  let a1 = [1, true];
  // 上面示例中，变量a1的值其实是一个元组，但是 TypeScript 会将其推断为一个联合类型的数组，即a的类型为(number | boolean)[]。所以，元组必须显式给出类型声明。

  // 元组成员的类型可以添加问号后缀（?），表示该成员是可选的。
  let a3:[number, number?] = [1];
  // 上面示例中，元组a3的第二个成员是可选的，表示可以忽略

  // 注意，问号只能用于元组的尾部成员，也就是说，所有可选成员必须在必选成员之后。
  type MyTuple = [number, number ,number?,string?]
  // 上面示例中，元组MyTuple的最后两个成员是可选的。也就是说，它的成员数量可能有两个、三个和四个。

  // 由于需要声明每个成员的类型，所以大多数情况下，元组的成员数量是有限的，从类型声明就可以明确知道，元组包含多少个成员，越界的成员会报错。
  let x:[string,string] = ['a', 'b'];
  // x[2] = 'c'; // 报错
  // 上面示例中，变量x是一个只有两个成员的元组，如果对第三个成员赋值就报错了。

  // 但是，使用扩展运算符（...），可以表示不限成员数量的元组。
  type NamedNums = [string, ...number[]];
  const a4:NamedNums = ['a', 1, 2, 3, 4];
  const b:NamedNums = ['b', 1,2,3];
  // 上面示例中，元组类型NamedNums的第一个成员是字符串，后面的成员使用扩展运算符来展开一个数组，从而实现了不定数量的成员。

  // 扩展运算符（...）用在元组的任意位置都可以，它的后面只能是一个数组或元组。
  type t1 = [string, number, ...boolean[]];
  type t2 = [string, ...boolean[], number];
  type t3 = [...boolean[], string, number];
  // 上面示例中，扩展运算符分别在元组的尾部、中部和头部，...的后面是一个数组boolean[]。

  // 如果不确定元组成员的类型和数量，可以写成下面这样。
  type Tuple = [...any[]];
  // 上面示例中，元组Tuple可以放置任意数量和类型的成员。但是这样写，也就失去了使用元组和 TypeScript 的意义。

  // 元组的成员可以添加成员名，这个成员名是说明性的，可以任意取名，没有实际作用。
  type Color = [red:number, green: Number, blue: number];
  const c:Color = [255, 255, 255];
  // 上面示例中，类型Color是一个元组，它有三个成员。每个成员都有一个名字，写在具体类型的前面，使用冒号分隔。这几个名字可以随便取，没有实际作用，只是用来说明每个成员的含义

  // 元组可以通过方括号，读取成员类型。
  type Tuple2 = [string, number];
  type Age = Tuple2[1]; // number
  // 上面示例中，Tuple2[1]返回1号位置的成员类型。

  // 由于元组的成员都是数值索引，即索引类型都是number，所以可以像下面这样读取。
  type Tuple3 = [string, number, Date];
  type TupleEl = Tuple3[number] // string|number|Date
  // 上面示例中，Tuple[number]表示元组Tuple的所有数值索引的成员类型，所以返回string|number|Date，即这个类型是三种值的联合类型。
 */
var x = [1, 2];
var y = x; // 正确
// x = y; // 报错
// 上面示例中，类型t1是只读元组，类型t2是普通元组。t2类型可以赋值给t1类型，反过来就会报错。
// 由于只读元组不能替代元组，所以会产生一些令人困惑的报错
function distanceFromDrigin(_a) {
    var x = _a[0], y = _a[1];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
var point = [3, 4]; // 使用as const将数组point变成只读元组
distanceFromDrigin(point); // 正确
