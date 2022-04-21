console.log("Closures");


function counter(){
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };
    return (IncreaseCounter);
}

var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//        console.log(i); // What is logged?
//     }, 1000);
//   }

//  Q1. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function outerFn(length){
    breadth = 30;
    innerFn = function(breadth){
        let area = length*breadth;
        console.log(area);
    }
}

outerFn(30);
innerFn(20);


// Q2. Take a variable in outer function and create an inner function to increase the counter every time it is called

const OuterFunction = function(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
    
};
const callOuter = OuterFunction();
callOuter();
callOuter();
callOuter();


// "Print Output

var a = 12;
(function () {
  alert(a);
})();

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);