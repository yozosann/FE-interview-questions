let str = '22222womanmmmmmmmanmmmmman';
let patt = /(wo)?(man)/g;
let str2 = str.replace(patt,'2222');
let patt2 = /2222/g;
// patt.compile(patt2);
let str3 = str2.replace(patt,'woman');
console.log(str3);

let str4 = '2';
let what = patt.exec(str);
console.log(patt.lastIndex);
what = patt.exec(str);
console.log(what);

let result = str.match(patt);
console.log(result);

var name = "Doe, John";
console.log(name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"));

const b = {};
b.c=1;
console.log(b);