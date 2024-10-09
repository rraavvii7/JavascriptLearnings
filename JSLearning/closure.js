var closeF = function (){
    var a = 10;
    function inner(){
        console.log("a "+ a);
    }
    a =100;
    return inner;
}
closeF()();