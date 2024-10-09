// Arrow function does not have its own this binding.
// It retains "this" value of the enclosing lexical context.

const obj1 = {
    name : "Ravi",
    arrowFunc : () => {
        console.log(this);
    },
    normalFunc : function(){
        console.log(this);
    }
}   

obj1.arrowFunc();
obj1.normalFunc();


// *********************************************

const obj2 = {
    name : "Sonu",
    normalFunc : function(){
        const arrowFunc = () => {
            console.log(this);
        }
        arrowFunc();
    },
}

obj2.normalFunc();


// Arrow function does not have concept of arguments

function normalFunc(){
    console.log(arguments);
}
normalFunc(1,"Ravi");

const arrowFunc = () => console.log(arguments);
arrowFunc();