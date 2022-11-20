import isPlainObject from "./src/lib/useProxy/isPlainObject.js";
console.log(isPlainObject(1));//false
console.log(isPlainObject([1,2,3]))//true
console.log(isPlainObject([[1,3]]))//false
console.log(isPlainObject({name:"Tom", score:[100, 90, 80]}))//false