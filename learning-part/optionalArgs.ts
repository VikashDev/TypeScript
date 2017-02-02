// we can specifiy the return type of the function
function areaofSqure(side:number, isInteger?:boolean){
    if(isInteger) {
        return Math.floor(side*side);
    }
return side*side;
}

console.log(areaofSqure(4.25, true));