// it facilitates the objects to acquire properties and features from one another

const arr = [1, 2, 3, 4, 5];

Array.prototype.myCustomFunction = function () {
    console.log("this is a custom function attached to an array");
}

arr.myCustomFunction();

// *********************************************
//Custom map function

Array.prototype.myCustomMap = function (cb) {   
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }
    return result;
}

const arr2 = [1, 2, 3, 4, 5];
const multiplyByTwo = arr2.myCustomMap((item) => item * 2);
console.log(multiplyByTwo);