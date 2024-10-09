const user1 = {
    name : "ravi",
    address : "patiala",
    printName : function(lastName){
        console.log("My name is "+ this.name +" "+lastName+ " "+ this.address);
    }
}
const user2 = {
    name: "sonu",
    address : "Bangalore"
}

user1.printName("Kumar");

//call method
user1.printName.call(user2,"call");

//bind method
var newFn = user1.printName.bind(user2);
newFn("bind")

//apply method
 user1.printName.apply(user2,["apply"]);