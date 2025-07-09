function getPizza() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("🍕 Pizza ready!"), 2000);
    });
  }
  
  async function enjoyDinner() {
    console.log("Ordering pizza...");
    
    const pizza = await getPizza();  // wait here until pizza is ready
    console.log(pizza);
    
    console.log("Eating pizza...");
    
    console.log("Dinner done!");
  }
  
  enjoyDinner();
  