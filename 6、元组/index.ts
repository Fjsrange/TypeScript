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

/**
 * 2、只读元组
 */
/* 
  // 元组也可以是只读的，不允许修改，有两种写法。
  // 写法一
  // type t = readonly [number, string];
  // 写法二
  type t = Readonly<[number, string]>;
  // 上面示例中，两种写法都可以得到只读元组，其中写法二是一个泛型，用到了工具类型Readonly<T>。

  // 跟数组一样，只读元组是元组的父类型。所以，元组可以替代只读元组，而只读元组不能替代元组。
  type t1 = readonly [number, number];
  type t2 = [number, number];

  let x:t2 = [1, 2];
  let y:t1 = x; // 正确
  // x = y; // 报错
  // 上面示例中，类型t1是只读元组，类型t2是普通元组。t2类型可以赋值给t1类型，反过来就会报错。

  // 由于只读元组不能替代元组，所以会产生一些令人困惑的报错
  function distanceFromOrigin([x, y]:[number, number]) {
    return Math.sqrt(x**2 + y**2);
  }

  let point = [3, 4] as const; // 使
  // distanceFromOrigin(point); // 报错用as const将数组point变成只读元组
  // 上面示例中，函数distanceFromOrigin()的参数是一个元组，传入只读元组就会报错，因为只读元组不能替代元组。

  // 上面示例报错的解决方法，就是使用类型断言，在最后一行将传入的参数断言为普通元组，详见《类型断言》一章。
  distanceFromOrigin(point as [number, number]); // 正确
 */


  /**
   * 3、成员数量的推断
   */
/* 
  // 如果没有可选成员和扩展运算符，TypeScript 会推断出元组的成员数量（即元组长度）。
  function f(point:[number, number]){
    if(point.length === 3){ // 报错
      // ...
    }
  }
  // 上面示例会报错，原因是 TypeScript 发现元组point的长度是2，不可能等于3，这个判断无意义。

  // 如果包含了可选成员，TypeScript 会推断出可能的成员数量。
  function f2(point:[number, number?, number?]){
    if(point.length === 4){ // 报错
      // ...
    }
  }
  // 上面示例会报错，原因是 TypeScript 发现point.length的类型是1|2|3，不可能等于4。

  // 如果使用了扩展运算符，TypeScript 就无法推断出成员数量。
  const myTuple:[...string[]] = ['a', 'b', 'c'];
  if(myTuple.length === 4){ // 正确
    // ...
  }
  // 上面示例中，myTuple只有三个成员，但是 TypeScript 推断不出它的成员数量，因为它的类型用到了扩展运算符，TypeScript 把myTuple当成数组看待，而数组的成员数量是不确定的。

  // 有些函数可以接受任意数量的参数，这时使用扩展运算符就不会报错。
  const arr = [1, 2, 3];
  console.log(...arr); // 1 2 3

  // 解决这个问题的一个方法，就是把成员数量不确定的数组，写成成员数量确定的元组，再使用扩展运算符。
  const arr2:[number, number] = [1, 2];
  function add(x:number, y:number) {
    // ...
  }
  add(...arr2); // 正确
  // 上面示例中，arr是一个拥有两个成员的元组，所以 TypeScript 能够确定...arr可以匹配函数add()的参数数量，就不会报错了。

  // 另一种写法就是使用 as const 断言。
  const arr3 = [1, 2] as const;
  // 上面这种写法也可以，因为 TypeScript 会认为arr的类型是readonly [1, 2]，这是一个只读的值类型，可以当作数组，也可以当作元组。
 */
