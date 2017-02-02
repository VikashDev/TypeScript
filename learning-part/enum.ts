// enum stroes bunch of numbers in a program
// cannot change the constant at any time
// valid for number only
enum myconstant {
    // st = 'abc' // not valid
    pi = 3.14,
    e = 2.73,
    log2 = 0.3,
    log5 = 0.7
}
var radius:number = 10;
console.log('find the circumfrence of circle');
console.log('circumfrence is ' + 2*myconstant.pi * radius);

// constant.pi = 1.2; cant reassign the enum constant