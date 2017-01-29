// how function will behave - blue print of the function

interface opInterface {
    shape:string;
    side?:number;

}

function operate(x:opInterface) {
    return x.side*x.side;
}
var calc = operate({shape:"square", side:5});