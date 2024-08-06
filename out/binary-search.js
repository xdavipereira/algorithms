function binarySearch(arr, target) {
    var low = 0;
    var high = arr.length;
    while (low < high) {
        var mid = Math.floor((low + high) / 2);
        var guess = arr[mid];
        if (target === guess) {
            return 1;
        }
        if (guess < target) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return -1;
}
;
var arr = [1, 3, 5, 6];
console.log(binarySearch(arr, 3));
console.log(binarySearch(arr, 5));
//# sourceMappingURL=binary-search.js.map