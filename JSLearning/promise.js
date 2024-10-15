var promise = new Promise(function(resolve, reject){
    var randomNumber = Math.floor(Math.random() * 16) + 5;
    if(randomNumber % 2 == 0){
        resolve("Random number found "+ randomNumber);
    }
    else{
        reject("Random number not found "+ randomNumber);
    }
})

promise.then((data) => {
    console.log("resolved " + data)
})
.catch((data) => {
    console.log("rejected " + data)
})
.finally(() => {
    console.log("promise completed")
})