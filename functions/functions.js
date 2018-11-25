//First order functions.
const sum = (a,b) => a+b;

const multiplication = (a, b) => a * b

const difference= (a,b) => a-b;

//HIGH ORDER function:
const calculate = fn => (a,b)=>{

  //Fn is a function as parameter, that returns another function that return a string.
  return  `The ${fn.name} of ${a} and ${b} is ${fn(a, b)}`;

}

//Test hof (high order functions):

//calculate return a function of this kind (a,b):string
const resultSum  = calculate(sum);
const resultMult = calculate(multiplication);
const resultDif  = calculate(difference);

console.log(resultSum(1,2));
console.log(resultMult(10,2));
console.log(resultDif(10,2));
