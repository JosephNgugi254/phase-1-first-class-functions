const receivesAFunction = (callback) => {
  callback();
}

const returnsANamedFunction = () => {
  return function namedFunction() {
    console.log("Hello!");
  }
}

const returnsAnAnonymousFunction = () => {  
  return function() {
    console.log("Hello!");
  }
}