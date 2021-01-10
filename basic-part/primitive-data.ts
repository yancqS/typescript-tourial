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

/* 空值 */
function logName(): void {
  console.log('my name is bob');
}

// Declaring variables of type void is not useful 
// because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

let unusable: void = undefined;

/* null & undefined */
let u: undefined = undefined;
let n: null = null;