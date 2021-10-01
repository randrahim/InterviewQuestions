const fibonacci = num => {
    if (num < 2) {
        return num;
    } else {
    return fibonacci(num-1) + fibonacci(num-2);
    }
}
console.log(fibonacci(5));
console.log(fibonacci(1));
console.log(fibonacci(10));