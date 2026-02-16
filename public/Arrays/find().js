let names = ["Alice", "Bob", "Charlie", "David"];
// using find() to find the first element in the array that satisfies a condition
// that will return the first element in the array that satisfies the condition, and undefined if no elements satisfy the condition
let std = names.find(name => name === "Charlie");
console.log(std); // Output: Charlie