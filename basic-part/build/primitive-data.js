/* 布尔值 */
let isDone = false;
let createdByNewBoolean = new Boolean(1);
let createdByBoolean = Boolean(1);
/* 数字 */
let decLiteral = 6; //十进制
let hexLiteral = 0xf00d; //十六进制
let binaryLiteral = 0b1010; //二进制
let octalLiteral = 0o744; //八进制
let big = 100n; //大数
let bigByBigInt = BigInt(10);
let notANumber = NaN;
let infinityNumber = Infinity;
/* 字符串 */
let myName = "Bob";
let myAge = 20;
//模板字符串
let sentence = `Hello, my name is ${myName},
I'll be ${myAge + 1} years old next month`;
/* 空值 */
function logName() {
    console.log('my name is bob');
}
// Declaring variables of type void is not useful 
// because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:
let unusable = undefined;
let unusable_null = null;
/* null & undefined */
let u = undefined;
let n = null;
let num = undefined;
let u_1;
let num_1 = u_1;
/* 任意值 any */
let any_name = undefined;
let any_name1 = 3;
let any_name2 = 'undefined';
let any_name3 = false;
let any_name4 = null;
any_name3 = 1000;
//在任意值上访问任何属性都是允许的,也允许调用任何方法：
let anything = 'hello';
console.log(anything.nyName);
console.log(anything.nyName.myFirstName);
let anyThing = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
let something; //等价于 let something: any;
something = 'seven';
something = 7;
something.setName('Tom');
/* never */
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
/* Unknown */
let uk = 2;
uk = 'two';
console.log(uk.name);
/* Array */
let list = [1, 2, 3];
let list_2 = [1, 2, 3];
/* Tuple */
let tu = ['tom', 20];
tu.push(100);
console.log(tu[0].length);
// console.log(tu[1].length) //Property 'length' does not exist on type 'number'.
