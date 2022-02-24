
const listItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function binary_search(item, arr) {

    let low = 0;
    let high = arr.length;

    let count = 0 ;

    while (low <= high) {
        count = ++count;
        console.log(`executou ${count} vezes`)
        let mid  = Math.round(((low + high) / 2), 1);
        let guess = arr[mid -1];

        if (guess == item) {
            return mid;
        } 
        
        if ( guess > item) {
            high = mid -1;
        } else {
            low = mid + 1
        }

    } 

}

console.log(binary_search(10, listItem));
console.log(binary_search(3, listItem));
console.log(binary_search(12, listItem));
console.log(binary_search(20, listItem));