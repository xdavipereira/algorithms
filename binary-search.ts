function binarySearch(arr: number[], target: number) {

    let low = 0;
    let high = arr.length;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        if(target === guess) {
            return 1;
        }

        if (guess < target) {
            low = mid+1;
        } else {
            high = mid;
        }

    }

    return -1;



};


const arr = [1, 3, 5, 6]

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 5));

