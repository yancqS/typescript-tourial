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
// tu.push(true);
//Argument of type 'true' is not assignable to parameter of type 'string | number'.
/* Enum 枚举类型 */
var Days;
(function (Days) {
    Days[Days["Sun"] = 3] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days['Sun']);
console.log(Days['Wed']);
var Days_1;
(function (Days_1) {
    Days_1[Days_1["Sun"] = 3] = "Sun";
    Days_1[Days_1["Mon"] = 1] = "Mon";
    Days_1[Days_1["Tue"] = 2] = "Tue";
    Days_1[Days_1["Wed"] = 3] = "Wed";
    Days_1[Days_1["Thu"] = 's'] = "Thu";
    Days_1[Days_1["Fri"] = 'd'] = "Fri";
    Days_1[Days_1["Sat"] = 'f'] = "Sat";
})(Days_1 || (Days_1 = {}));
;
var Days_2;
(function (Days_2) {
    Days_2[Days_2["Sun"] = 7] = "Sun";
    Days_2[Days_2["Mon"] = 1.5] = "Mon";
    Days_2[Days_2["Tue"] = 2.5] = "Tue";
    Days_2[Days_2["Wed"] = 3.5] = "Wed";
    Days_2[Days_2["Thu"] = 4.5] = "Thu";
    Days_2[Days_2["Fri"] = 5.5] = "Fri";
    Days_2[Days_2["Sat"] = 6.5] = "Sat";
})(Days_2 || (Days_2 = {}));
;
const _num = 10;
var Days_3;
(function (Days_3) {
    Days_3[Days_3["Sun"] = 8] = "Sun";
    Days_3[Days_3["Mon"] = 12] = "Mon";
    Days_3[Days_3["Tue"] = 13] = "Tue";
    Days_3[Days_3["Wed"] = 14] = "Wed";
    Days_3[Days_3["Thu"] = 15] = "Thu";
    Days_3[Days_3["Fri"] = 16] = "Fri";
    Days_3[Days_3["Sat"] = 'blue'.length] = "Sat";
})(Days_3 || (Days_3 = {}));
;
console.log(Days_3[4]); //Sat
