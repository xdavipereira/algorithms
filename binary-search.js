function binarySearch(arr, item) {
    

    if(!arr) return null;

    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.round((low + high) / 2);
        let guess = arr[mid];

        if(guess === item) {
            return mid;
        }
    
        if(guess > item){
            high = mid - 1;
        } else {
            low = mid +1
        }
        
    }
    
    return null;
    
}

const x = binarySearch([1,2,3,4,5, 6, 7, 8, 9, 10],10);

console.log(x);