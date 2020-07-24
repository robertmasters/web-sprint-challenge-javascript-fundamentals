// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Because of closure, the inside functions always have access the the scope outside of them but no access to functions nested within them. Since this is the child function it will have access to the parent function being myFunction since the variable is in the parent funtion it is well within the scope of the child function to access. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let counter = 0;
  for (let i = 0;i<=num;i++){
    counter += i;
  }
  return counter;
} 
console.log(summation(4));