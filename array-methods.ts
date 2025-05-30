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

    sort(): number[]{
        for(let i = 0; i < this.arr.length; i++){  //this method is called bubble sort
            for(let j = 0; j < this.arr.length - i - 1; j++){
                if (this.arr[j] > this.arr[j+1]){
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j+1];
                    this.arr[j+1] = temp;
                }
            }
        }

        return this.arr;
    }

    getArray(): number[] {
        return this.arr;
    }
}

// Create an instance of the class
const arrayMethods = new ArrayMethods([1, 2, 3, 4]);

console.log(arrayMethods.getArray());  // [1, 2, 3, 4]

// const result = arrayMethods.pop();

// console.log(result);  // Output: 4
// console.log(arrayMethods.getArray())  // oUTPUT: [1, 2, 3]

const newArrayLength = arrayMethods.push(3);
arrayMethods.push(9);
arrayMethods.push(7);
console.log("New Array Length", newArrayLength) // Output: 5

console.log(arrayMethods.sort());

console.log(arrayMethods.getArray())  
