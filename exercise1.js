function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(7, 3));  // Output: 21
console.log(calculateArea(4, 4));  // Output: 16

const calculatePerimeter = function (length, width) {
    return 2 * length + 2 * width;
}

console.log(calculatePerimeter(5, 10)); // Output: 30
console.log(calculatePerimeter(7, 3));  // Output: 20
console.log(calculatePerimeter(4, 4));  // Output: 16