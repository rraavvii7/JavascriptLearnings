//Currying is a process of converting a function with more number of arity in to a function with less number of arity.
//Arrity means number of arguments a function takes.

function multiply(num1, num2){
    return num1 * num2;
}



//Currying with the help of binding

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));


//Currying with the help of closure
const multiply1 = function(num1){
    const y = function(num2){
        return num1 * num2;
    }
    return y;
}

const multiplyByThree = multiply1(3);
console.log(multiplyByThree(5));
