// simple addition function
function addNum(num1, num2) {
    return num1+num2;
}
console.log(addNums(1,2));

// addition function with number valid argument - both pram will be number
function addNums(num1:number, num2:number):number {
    return num1+num2;
}

console.log(addNums(10,2));

// addition function with number valid argument - parm 1 be any number
function addAny(num1:any, num2:number):number {
    if(typeof num1 == 'string') {
      if(isNaN(parseInt(num1, 10))) {
          return 0;
      }
      num1 = parseInt(num1, 10);
    }
    return num1+num2;
}

console.log(addAny('10', 20));