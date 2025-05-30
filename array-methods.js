var ArrayMethods = /** @class */ (function () {
    function ArrayMethods(newArr) {
        this.arr = [];
        if (newArr) {
            this.arr = newArr;
        }
    }
    ArrayMethods.prototype.pop = function () {
        var lastIndex = this.arr.length - 1;
        if (this.arr.length === 0) {
            return -1;
        }
        var lastElement = this.arr[lastIndex]; // get the last elemnt in the array
        this.arr.length = lastIndex; // removes the last element by reducin the arr, 
        return lastElement; // returns the last element, just like arr.pop() works
    };
    ArrayMethods.prototype.push = function (value) {
        this.arr[this.arr.length] = value;
        return this.arr.length; //This return the length of the Array after the value had been addded to it
    };
    ArrayMethods.prototype.getArray = function () {
        return this.arr;
    };
    return ArrayMethods;
}());
// Create an instance of the class
var arrayMethods = new ArrayMethods([1, 2, 3, 4]);
console.log(arrayMethods.getArray()); // [1, 2, 3, 4]
var result = arrayMethods.pop();
console.log(result); // Output: 4
console.log(arrayMethods.getArray()); // oUTPUT: [1, 2, 3]
var newArrayLength = arrayMethods.push(6);
console.log("New Array Length", newArrayLength); // Output: 4
console.log(arrayMethods.getArray()); // oUTPUT: [1, 2, 3, 6]
