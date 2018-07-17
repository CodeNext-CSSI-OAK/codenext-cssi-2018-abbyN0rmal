function makeAbba (a , b) {
  return a + b + b + a;
}


function sls (a , b){
if (a.length > b.length) {
  return b + a + b; //"return; " dont need the parenthesis
  }
  return a + b + a;
}


function lastTwo(str){
  if(str.lenth >= 2 ){
  let lastChar = str.charAt (str.lenth-1);
  let secondLastChar = str.charAt (str.lenth-2);
  let firstPart = str.substring (0, str.lenth -2);
  return firstPart + lastChar + secondLastChar;
  }
 return str;
}


function foo(param){
  console.log(param);
}
foo('anything');
console.log(param); // this needs to live inside the function otherwise it does not work at all!

console.log(bar);
console.log(makeAbba("hey", "yo"));
console.log(sls("sad","happy"));
console.log(sls("happy", "sad"));
console.log(lastTwo("coding"));
