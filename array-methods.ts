class ArrayMethods{
    private arr: number[] = [];

    constructor(newArr?: number[]) {
        if (newArr) {
            this.arr = newArr;
        }
    }
    pop(): number{
        let lastIndex = this.arr.length - 1;
        if(this.arr.length === 0){
            return -1;
        }
        const lastElement = this.arr[lastIndex]; // get the last elemnt in the array
        this.arr.length = lastIndex; // removes the last element by reducin the arr, 
        return lastElement;  // returns the last element, just like arr.pop() works
    }

    push(value: number): number {
        this.arr[this.arr.length] = value;
        return this.arr.length;  //This return the length of the Array after the value had been addded to it
    }

    getArray(): number[] {
        return this.arr;
    }
}

// Create an instance of the class
const arrayMethods = new ArrayMethods([1, 2, 3, 4]);

console.log(arrayMethods.getArray());  // [1, 2, 3, 4]

const result = arrayMethods.pop();

console.log(result);  // Output: 4
console.log(arrayMethods.getArray())  // oUTPUT: [1, 2, 3]

const newArrayLength = arrayMethods.push(6);
console.log("New Array Length", newArrayLength) // Output: 4

console.log(arrayMethods.getArray())  // oUTPUT: [1, 2, 3, 6]
