// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2));                                                                    
// prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
// prints "Each person gets 2.67 slices of pizza"

const cutPizzaSlices = (numOfSlices) => {
    return (numOfPeople) => {
        const shared = (numOfSlices / numOfPeople);
        return (`Each person gets ${shared.toFixed(2)}`);
    }
}

const pizza = cutPizzaSlices(8);
console.log(pizza(2));
console.log(pizza(3));

/**
 * confusing object with function
 * I need to understand how to create and use a function
 * 
 */


