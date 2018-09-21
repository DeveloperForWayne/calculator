const num1=9;
const num2=3;
var value;

function add(x, y) {
    var z;
    z = x + y;
    return z;
}

function subtract(x, y){
    var z; 
    z = x - y;
    return z;
}

function multipy(x, y){
    var z; 
    z = x * y;
    return z;
}

function divide(x, y){
    var z; 
    z = x / y;
    return z;
}

value = add (num1, num2);
console.log("The add result is" + value);

value = subtract (num1, num2);
console.log("The subtract result is" + value);

value = multipy (num1, num2);
console.log("The multipy result is" + value);

value = divide (num1, num2);
console.log("The divide result is" + value);