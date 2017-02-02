// enum stroes bunch of numbers in a program
// cannot change the constant at any time
// valid for number only
var myconstant;
(function (myconstant) {
    myconstant[myconstant["pi"] = 3.14] = "pi";
    myconstant[myconstant["e"] = 2.73] = "e";
    myconstant[myconstant["log2"] = 0.3] = "log2";
    myconstant[myconstant["log5"] = 0.7] = "log5";
})(myconstant || (myconstant = {}));
var radius = 10;
console.log('find the circumfrence of circle');
console.log('circumfrence is ' + 2 * myconstant.pi * radius);
