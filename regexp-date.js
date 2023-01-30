// first task
let str1 = "ahb acb aeb aeeb adcb axeb";
let regexp1 = /a.b/g;
let results1 = str1.match(regexp1);
console.log(results1);

// second task
let str2 = "2 + 3 223 2223";
let regexp2 = /2 \+ 3/g;
let results2 = str2.match(regexp2);
console.log(results2);

// third task
let now = new Date();
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getFullYear());