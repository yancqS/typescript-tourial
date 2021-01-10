"use strict";
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
/* 空值 */
function logName() {
    console.log('my name is bob');
}
// Declaring variables of type void is not useful 
// because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:
let unusable = undefined;
/* null & undefined */
let u = undefined;
let n = null;
