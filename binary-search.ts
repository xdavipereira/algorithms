function binarySearch(arr: number[], target: number) {


    let low = 0;
    let high = arr.length;

    while (low < high) {

        let mid = Math.floor((low + high) / 2);

        let guess = arr[mid];


        if (guess === target) {
            return mid;
        }

        if (guess < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return -1;
};


const arr = [1, 3, 5, 6]

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 10));
