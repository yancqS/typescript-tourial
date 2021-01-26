/* 布尔值 */
let isDone: boolean = false;

let createdByNewBoolean: Boolean = new Boolean(1);

let createdByBoolean: boolean = Boolean(1)

/* 数字 */
let decLiteral: number = 6; //十进制

let hexLiteral: number = 0xf00d; //十六进制

let binaryLiteral: number = 0b1010; //二进制

let octalLiteral: number = 0o744; //八进制

let big: bigint = 100n; //大数

let bigByBigInt: bigint = BigInt(10);

let notANumber: number = NaN;

let infinityNumber: number = Infinity;

/* 字符串 */
let myName: string = "Bob";
let myAge: number = 20;

//模板字符串
let sentence: string = `Hello, my name is ${myName},
I'll be ${myAge + 1} years old next month`;

/* 空值 */
function logName(): void {
  console.log('my name is bob');
}

// Declaring variables of type void is not useful 
// because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

let unusable: void = undefined;
let unusable_null: void = null;

/* null & undefined */
let u: undefined = undefined;
let n: null = null;

let num: number = undefined;

let u_1: undefined;
let num_1: number = u_1;

// /* 任意值 any */
// let any_name: any = undefined;
// let any_name1: any = 3;
// let any_name2: any = 'undefined';
// let any_name3: any = false;
// let any_name4: any = null;
// any_name3 = 1000;

// //在任意值上访问任何属性都是允许的,也允许调用任何方法：
// let anything: any = 'hello';
// console.log(anything.nyName);
// console.log(anything.nyName.myFirstName);

// let anyThing: any = 'Tom';
// anyThing.setName('Jerry');
// anyThing.setName('Jerry').sayHello();
// anyThing.myName.setFirstName('Cat');

// let something; //等价于 let something: any;
// something = 'seven';
// something = 7;
// something.setName('Tom');

/* never */
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while(true) {}
}

/* Unknown */
let uk: unknown = 2;
uk = 'two';
console.log((uk as {name: string}).name)

/* Array */
let list: number[] = [1, 2, 3];
let list_2: Array<number> = [1, 2, 3];

/* Tuple */
let tu: [string, number] = ['tom', 20];
tu.push(100)
console.log(tu[0].length)
// console.log(tu[1].length) //Property 'length' does not exist on type 'number'.

// tu.push(true);
//Argument of type 'true' is not assignable to parameter of type 'string | number'.

/* Enum 枚举类型 */
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days['Sun']);
console.log(Days['Wed']);


enum Days_1 {Sun = 3, Mon = 1, Tue, Wed, Thu = <any>'s', Fri = <any>'d', Sat = <any>'f'};

enum Days_2 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

const _num = 10;

enum Days_3 {Sun = 1 << 3, Mon = Sun | 1 << 2, Tue, Wed, Thu, Fri, Sat = 'blue'.length};

console.log(Days_3[4]); //Sat