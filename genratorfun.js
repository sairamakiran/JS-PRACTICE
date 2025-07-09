function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    yield '!';
  }
  
  // Using the generator function
  const iterator = generatorFunction();
  try{
  console.log(iterator.next().value); // Outputs: Hello
  console.log(iterator.next().value); // Outputs: World
  console.log(iterator.next().value); // Outputs: !
  }
  finally{
    console.log("completed"); // Outputs: undefined (no more values)
  }