const num1=9;
const num2=3;

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

var valueAdd = add (num1, num2);
console.log("The add result is " + valueAdd);

var valueSub = subtract (num1, num2);
console.log("The subtract result is " + valueSub);

var valueMult = multipy (num1, num2);
console.log("The multipy result is " + valueMult);

var valueDiv = divide (num1, num2);
console.log("The divide result is " + valueDiv);

if(valueSub > valueDiv){
    console.log("Subtract Larger");
} else if (valueSub < valueDiv) {
    console.log("Subtract Smaller");
} else if (vvalueSub == valueDiv) {
    console.log("Subtract Same");
}

if(valueDiv > valueSub){
    console.log("Divide Larger");
} else if (valueDiv < valueSub) {
    console.log("Divide Smaller");
} else if (valueDiv == valueSub) {
    console.log("Divide Same");
}