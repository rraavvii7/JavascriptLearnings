function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "cheese";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = "prepared dough from " + cheese;
      resolve(dough);
    }, 2000);
  });
}

function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = "Pizza made from : " + dough;
      var randomNumber = Math.floor(Math.random() * 16) + 5;
      if (randomNumber % 2 == 0) {
        resolve(pizza);
      } else {
        reject("Could not prepare pizza from : " + dough);
      }
    }, 2000);
  });
}

//handling asynchronous call through promise (chaining of then) 
getCheese()
  .then((data) => {
    console.log("Got " + data);
    return makeDough(data);
  })
  .then((data) => {
    console.log(data);
    return makePizza(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log("Error " + data);
  })
  .finally(() => {
    console.log("Promise completed");
  });

  //handling asynchronous call through async await
  const makePizzaAsynchronously = async () => {
    try{

        const cheese = await getCheese();
        console.log("Got " + cheese);

        //await in the above line literally making us wait there before coming to line below
        const dough = await makeDough(cheese);
        console.log(dough);
        const pizza = await makePizza(dough);
        console.log(pizza);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Promise completed");
    }
  }

  //promise output wont be shown
  await makePizzaAsynchronously();

  //promise output will be shown if we dont use await
  makePizzaAsynchronously();
  
