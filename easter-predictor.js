// Author: Abigail Guerrero
let y = 2003;
console.log ("y = 2003");

let a = y % 19;
console.log(a);

let b = Math.floor(y / 100);
console.log(b);

let c = y % 100;
console.log(c);

let d = b / 4;
console.log(d);

let e =  b % 4;
console.log(e);

let f = Math.floor (b + 8) / 25;
console.log(f);

let g = Math.floor (b - f + 1) / 3;
console.log(g);

 let h = Math.floor (19 * a + b - d - g + 15) / 30;
 console.log(h);

 let i = c / 4;
 console.log(i);

 let k = c % 4;
 console.log(k);

 let r = (32 + 2 * e + 2 * i - h - k) % 7;
 console.log(r);

 let m = (a + 11 * h + 22 * r) / 451;
console.log(m);

let n = (h + r - 7 * m + 114) / 31;
console.log(n);

let p = (h + r - 7 * m + 114) % 31;
console.log(p);
