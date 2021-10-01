const fizzBuzz = num => {
    // Check if the number is multiply by 3 or 5    
    if (num%3 === 0 && num%5 ===0) {
        console.log("fizzBuzz");        
    } else if (num%3 === 0) {
        console.log("Fizz");
    } else if (num%5 ===0) {
        console.log("Buzz");
    } else {
        console.log(num)
    }
}
fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(25);