// Author: Abigail Guerrero
let y = 2003;
console.log ("y = 2003");

let a = y % 19;
console.log("a = " + y % 19);

let b = Math.floor (y / 100);
console.log("b = " + y / 100);

let c = y % 100;
console.log("c = " + c);

let d = b / 4;
console.log("d = " + d);

let e =  b % 4;
console.log("e = " + e);

let f = (b + 8) / 25;
console.log("f = " + f);

let g = (b - f + 1) / 3;
console.log("g = " + g);

 let h = (19 * a + b - d - g + 15) / 30;
 console.log("h = " + h);

 let i = c / 4;
 console.log("i = " + i);

 let k = c % 4;
 console.log("k = " + k);

 let r = (32 + 2 * e + 2 * i - h - k) % 7;
 console.log("r = " + r);

 let m = (a + 11 * h + 22 * r) / 451;
console.log("m = " + m);

let n = (h + r - 7 * m + 114) / 31;
console.log("n = " + n);

let p = (h + r - 7 * m + 114) % 31;
console.log("p = " + p);
