// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function bigPapa(){
  console.log('im the big papa');
  function papa(){
    console.log('im the papa');
    function lilBrother(){
      console.log('im the little Brother');
    }
    lilBrother();
  }
  papa();
}
bigPapa();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  return count += 1;

  // Return a function that when invoked increments and returns a counter variable.
};
counter();
counter();
counter();
counter();
counter();
console.log(count);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
let factoryCount = {'count': 10};
const counterFactory = (cb) => {
  
  if(cb === 'up'){
    return factoryCount.count += 1;
  }else if(cb === 'down'){
   return factoryCount.count -= 1; 
  }else if(cb === 'double'){
    return factoryCount.count += 2;
  }else
  return factoryCount;
  };
  counterFactory('double');
  console.log(counterFactory());